import React, { useRef,useCallback,useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
// import initialNodes from './Sections/Init_nodes';
// import initialEdges from './Sections/Init_edges';
import onNodeDoubleClickHandler from './Sections/DoubleClick';
import SideBarNew from './Sections/SideBarNew';
import '@xyflow/react/dist/style.css';
import SideBarProperties from './Sections/SideBarProperties';
import TopButton from './Buttons/TopButton';
import importFromJSON from './Sections/JsonImport';
import BiDirectionalNode from './Sections/BiDirectionalNode.tsx';
import TriDirectionalNode from './Sections/TriDirectionalNode.tsx';
import NormalNode from './Sections/NormalNode.tsx';
import "./Sections/css/MainWorkSpace.css"
import Search from './Sections/Search.jsx';

 

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
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedEdge, setSelectedEdge] = useState(null);
  const workspaceRef = useRef(null); 
  const [workspacesize, setWorkSpaceSize] = useState({ width: '79vw', height: '100vh' })
  const[sideBarsize, setSideBarSize] = useState({width:'20vw',height:'100vh'})
  const[expand , SetExpand] = useState(true)
  const [searchVal, setSearchVal] = useState('');
  // const[findarea,setFindArea] = useState(false)
  //  const [center, setCenter] = useState({ x: 0, y: 0 });

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true }, eds),
      ),
    [setEdges]
  );
  
  const getBottomMostNode = () => {
    const bottomMostNode = nodes.reduce((prev, current) => {
      return (prev.position.y > current.position.y) ? prev : current;
    });
    return bottomMostNode;
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
 



  // we can use  this if we need to add a node while clicking a button
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
  }
  else{
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
  };


  const onNodeDoubleClick = (event, node) => {
    onNodeDoubleClickHandler(event, node, setSelectedNode); 
  };

  const onPaneClick = () =>{
    setSelectedNode(null)
    setSelectedEdge(null)
  }

  useEffect(() => {
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData('Text'); // Get the pasted text
      importFromJSON(pastedText, setNodes, setEdges); // Attempt to parse and import the JSON
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
      workspaceRef.current.addEventListener('paste', handlePaste); // Handle paste event
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.removeEventListener('paste', handlePaste); // Remove paste listener
      }
      document.removeEventListener('keydown', handleKeyDown); // Remove keydown listener
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





  const updateNodeProperties =  (key, value) => {
    if (selectedNode) {
      const updatedNode = { ...selectedNode };
      updatedNode.data[key].value = value;
      setSelectedNode(updatedNode);

      updatedNode.values[key] = value;
    }
  };



  function searchresults(searchVal) {
    setSearchVal(searchVal)
        // if (searchVal === "") { setProducts(productList); return; }
        // const filterBySearch = productList.filter((item) => {
        //     if (item.toLowerCase()
        //         .includes(searchVal.toLowerCase())) { return item; }
        // })
        // setProducts(filterBySearch);
    }

const changesize=()=>{
  if (expand === true){
  SetExpand(false)
  setWorkSpaceSize({ width: '89vw', height: '100vh' })
  setSideBarSize({width:'10vw',height:'100vh'})
  }
  else{
    SetExpand(true)
    setWorkSpaceSize({ width: '79vw', height: '100vh' })
    setSideBarSize({width:'19vw',height:'100vh'})
  }
}
  
  return (
    <>
    <div style={workspacesize}onDrop={onDrop}
      onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        onEdgeClick={onEdgeClick}
        onNodeClick={onNodeDoubleClick}
        // onNodeMouseEnter={onNodeMouseEnter}
        onNodeDoubleClick={onNodeDoubleClick}
      >
        
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>

    
    <div
        className="Properties"
        style={{
          ...sideBarsize,
          flex: 1,
          padding: '0px,10px,10px,10px',
          borderLeft: '1px solid #ccc',
          overflow: 'auto', 
          position: "fixed",
          right: 0,
          top: 0,
        }}
      >
        
        {selectedNode ? (
          <>
        <SideBarProperties selectedNode = {selectedNode} updateNodeProperties={updateNodeProperties}/>
        <div><Button variant="primary" onClick={onPaneClick}>Save</Button></div>
        {/* <div><Button variant="primary">Primary</Button></div> */}
        </>): 
        (
          <>
        <div className='TopBarSec'><img src="move.png" alt="shrink/expand" style ={{width: "20px"}} onClick={changesize}></img><TopButton nodes={nodes} edges={edges} setNodes = {setNodes} setEdges = {setEdges} /></div>
        <div className="SearchArea">
        <div className="search-container">
         <input
          type="text"
          className="search-box"
          placeholder="Search Nodes"
          onChange={e=> searchresults(e.target.value)}
          />
  </div>
</div>
{searchVal === "" ? (
  <>
        <SideBarNew />
        <div className='Bottom-Bar'>
        <Button className = "SaveButtonHome" variant="primary" >Save</Button>
        <Button className = "ClearAllHome" variant="primary" onClick={clearAll}>Clear All</Button></div>
        </>
):(<Search searchVal= {searchVal} setSearchVal = {setSearchVal}/>)}
        </>
        )
}
</div>
</>
  );
};
export default MainWorkSpace



