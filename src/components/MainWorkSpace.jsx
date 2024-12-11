import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import onNodeClickHandler from './Sections/onClick.jsx';
import SideBarNew from './Sections/SideBarNew';
import '@xyflow/react/dist/style.css';
import SideBarProperties from './Sections/SideBarProperties';
import TopButton from './Buttons/TopButton';
import importFromJSON from './Sections/JsonImport';
import BiDirectionalNode from './Sections/BiDirectionalNode.tsx';
import TriDirectionalNode from './Sections/TriDirectionalNode.tsx';
import NormalNode from './Sections/NormalNode.tsx';
import "./Sections/css/MainWorkSpace.css";
import Search from './Sections/Search.jsx';
import onNodeDoubleClickHandler from './Sections/DoubleClick.jsx';
import onDebugClickHandler from '../components/Sections/Debug.jsx';
import { Menu, X } from 'lucide-react';

const initialNodes = [
  {
    id: '1',
    label: 'Start',
    type: 'monodir',
    position: { x: window.innerWidth/2, y: window.innerHeight/2 }, 
    data: { label: 'start' },
    style: { backgroundColor: 'lightgreen' },
    values: { value: 'start' }
  }
];

const MainWorkSpace = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const workspaceRef = useRef(null); 
  const [workspacesize, setWorkSpaceSize] = useState({ width: '79vw', height: '100vh' });
  const [sideBarsize, setSideBarSize] = useState({width:'20vw', height:'100vh'});
  const [expand, SetExpand] = useState(true);
  const [clickedNode, setClickedNode] = useState(null);
  const [searchVal, setSearchVal] = useState('');
  const [menuPosition, setMenuPosition] = useState(null);
  const clickTimeoutRef = useRef(null);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true }, eds),
      ),
    [setEdges]
  );
  
  const getBottomMostNode = () => {
    return nodes.reduce((prev, current) => {
      return (prev.position.y > current.position.y) ? prev : current;
    });
  };

  const centerOfViewport = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  const nodeTypes = {
    bidirectional:(props)=>(<BiDirectionalNode{...props} edges={edges} />),
    tridirectional:(props)=>(<TriDirectionalNode{...props} edges={edges} />),
    monodir:(props)=>(<NormalNode {...props} edges={edges} />),
  };

  const addNode = (nodeProps) => {
    if (nodes.length !== 0){
      let bottomMostNode = getBottomMostNode();
      setNodes((nds) => [
        ...nds,
        {
          id: (nds.length + 1).toString(), 
          position: { x:bottomMostNode.position.x, y:bottomMostNode.position.y+60},
          ...nodeProps,
        },
      ]);
    } else {
      setNodes((nds) => [
        ...nds,
        {
          id: (nds.length + 1).toString(), 
          position: { x:centerOfViewport.x, y: centerOfViewport.y},
          ...nodeProps,
        },
      ]);
    }
  }

  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge);
    setSelectedNode(null)
    setMenuPosition(null)
    setSearchVal('')
  };

  const onNodeClick = (event, node) => {
    onNodeClickHandler(event, node, setSelectedNode);
    setMenuPosition(null)
    setSearchVal('')
  };

  const onPaneClick = () =>{
    setSelectedNode(null)
    setSelectedEdge(null)
    setMenuPosition(null)
    setSearchVal('')
  }

  useEffect(() => {
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData('Text');
      importFromJSON(pastedText, setNodes, setEdges);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Delete' && selectedEdge) {
        deleteEdge(selectedEdge.id);
      }
      if(event.key === 'Delete' && selectedNode){
        deleteNode(selectedNode.id)
      }
    };

    if (workspaceRef.current) {
      workspaceRef.current.addEventListener('paste', handlePaste);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.removeEventListener('paste', handlePaste);
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const deleteEdge = (edgeId) => {
    const newEdges = edges.filter((edge) => edge.id !== edgeId);
    setEdges(newEdges);
    setSelectedEdge(null); 
  };

  const deleteNode = (nodeId) => {
    const newNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(newNodes);

    const newEdges = edges.filter(
      (edge) => edge.source !== nodeId && edge.target !== nodeId
    );
    setEdges(newEdges);

    setSelectedNode(null); 
  };

  const clearAll = () => {
    setNodes(initialNodes);
    setEdges([]);
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = event.target.getBoundingClientRect();
      const nodeProps = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      setNodes((nds) => [
        ...nds,
        {
          id: (nds.length + 1).toString(), 
          position,
          ...nodeProps,
        },
      ])
    },
    [setNodes]
  );

  const updateNodeProperties = (key, value) => {
    if (selectedNode) {
      const updatedNode = { ...selectedNode };
      updatedNode.data[key].value = value;
      setSelectedNode(updatedNode);

      updatedNode.values[key] = value;
    }
  };

  const refreshNode = (nodes) => {
    setNodes((nodes) =>
      nodes.map((node) =>({ ...node }) 
      )
    );
  };

  const onDebugClick = () => {
    onDebugClickHandler(selectedNode)
    refreshNode([selectedNode])
  }

  const onNodeDoubleClick = () => {
    setSelectedNode(selectedNode)
    onNodeDoubleClickHandler(selectedNode); 
    refreshNode([selectedNode])
  }

  function searchresults(searchVal) {
    setSearchVal(searchVal)
  }

  const changesize = () => {
    if (expand === true){
      SetExpand(false)
      setWorkSpaceSize({ width: '89vw', height: '100vh' })
      setSideBarSize({width:'15vw', height:'100vh'})
    } else {
      SetExpand(true)
      setWorkSpaceSize({ width: '79vw', height: '100vh' })
      setSideBarSize({width:'19vw', height:'100vh'})
    }
  }

  const handleNodeContextMenu = (event, node) => {
    event.preventDefault();
    setSelectedNode(node); 
    setMenuPosition({
      x: event.clientX,
      y: event.clientY,
      node,
    });
  };

  const handleToggleSize = () => {
    changesize();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <div 
        style={workspacesize} 
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="relative flex-grow"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onPaneClick={onPaneClick}
          onEdgeClick={onEdgeClick}
          onNodeClick={onNodeClick}
          onNodeContextMenu={handleNodeContextMenu}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>

        {menuPosition && (
          <div
            className="absolute z-50 bg-white border border-gray-300 rounded-lg p-4 shadow-md"
            style={{
              top: menuPosition.y,
              left: menuPosition.x,
            }}
          >
            <div className="mb-2">
              <button 
                onClick={onNodeDoubleClick} 
                className="w-full px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Comment
              </button>
            </div>
            <div>
              <button 
                onClick={onDebugClick} 
                className="w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Debug
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div 
        className="fixed right-0 top-0 h-full border-l border-gray-300 overflow-auto bg-white shadow-lg"
        style={{
          ...sideBarsize,
          width: sideBarsize.width,
        }}
      >
        {selectedNode ? (
          <div className="p-4">
            <SideBarProperties 
              setSelectedNode={setSelectedNode} 
              selectedNode={selectedNode} 
              updateNodeProperties={updateNodeProperties} 
              changeSize={changesize} 
              onDoubleclick={onNodeDoubleClick} 
              setNodes={setNodes}
            />
            <div className="mt-4">
              <button 
                onClick={onPaneClick} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              {/* <img 
                src="move.png" 
                alt="shrink/expand" 
                
              /> */}
              <div 
          className="w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={handleToggleSize}
        >
          {isExpanded ? (
          <X 
            className="transition-all duration-300"  // Add transition for smooth effect
            style={{
              opacity: isExpanded ? 1 : 0,  // Fade out when not expanded
              transform: isExpanded ? 'rotate(0deg)' : 'rotate(90deg)',  // Rotate when collapsed
            }}
          />
        ) : (
          <Menu 
            className="transition-all duration-300"  // Add transition for smooth effect
            style={{
              opacity: !isExpanded ? 1 : 0,  // Fade in when not expanded
              transform: !isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',  // Rotate when expanded
            }}
          />
        )}

        </div>
              <TopButton 
                nodes={nodes} 
                edges={edges} 
                setNodes={setNodes} 
                setEdges={setEdges} 
              />
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search Nodes"
                  onChange={e => searchresults(e.target.value)}
                />
              </div>
            </div>

            {searchVal === "" ? (
              <div>
                <SideBarNew />
                <div className="flex space-x-2 mt-4">
                  <button 
                    className="flex-grow px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Save
                  </button>
                  <button 
                    onClick={clearAll}
                    className="flex-grow px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            ) : (
              <Search 
                searchVal={searchVal} 
                setSearchVal={setSearchVal} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainWorkSpace;