import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType
} from '@xyflow/react';
import onNodeClickHandler from './Sections/onClick.jsx';
import SideBarNew from './Sections/SideBarNew';
import '@xyflow/react/dist/style.css';
import SideBarProperties from './Sections/SideBarProperties';
import TopButton from './Buttons/TopButton';
import importFromJSON from './Sections/JsonImport';
import BiDirectionalNode from './Sections/BiDirectionalNode.tsx';
import TriDirectionalNode from './Sections/TriDirectionalNode.tsx';
import NormalNode from './Sections/NormalNode.jsx';
import "./Sections/css/MainWorkSpace.css";
import Search from './Sections/Search.jsx';
import onNodeDoubleClickHandler from './Sections/DoubleClick.jsx';
import onDebugClickHandler from '../components/Sections/Debug.jsx';
import { Lasso, Menu, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import ComputationalNode from './Sections/ComputationalNode.jsx';
import FloatingButtons from './Sections/FloatingButtonExample.jsx';
import HandleExport from './Sections/JsonExportBackend.jsx';
import ConstantNode from './Sections/ConstantNode.jsx';
import buttonContent from './Buttons/ButtonContent.jsx';
import buttonValue from './Buttons/ButtonValues.jsx';
import VariableNode from './Sections/VariableNode.jsx';
import { useAsyncError } from 'react-router-dom';
import ArithmaticOperationNode from './Sections/ArithmaticOperationNode.jsx';

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


let varnodes = [{
  label: 'Variable',
  data: { label: 'Variable',...buttonContent.Variable},
  type:'variablenode',
  style: { backgroundColor: 'white'},
  values:{ ...buttonValue.Variable },
}]


let constnodes= [{
  label: 'Constant',
  data: { label: 'Constant',...buttonContent.Constant},
  type:'constantNode',
  style: { backgroundColor: 'lightblue'},
  values:{ ...buttonValue.Constant },
}]

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
  const [searchVal, setSearchVal] = useState('');
  const [menuPosition, setMenuPosition] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paneMenuPosition , setPaneMenuPosition] = useState(null);
  const [inputType, setInputType] = useState(null);
  const[type,settype]=useState(null)



  const handleInit = (instance) => {
    setReactFlowInstance(instance); // Set the React Flow instance
  };



  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const captureState = (nodes ,edges) => {
    setUndoStack((prev) => {
      // Check if the new { nodes, edges } is already in the stack
      const isDuplicate = prev.some(
          (entry) => 
              JSON.stringify(entry.nodes) === JSON.stringify(nodes) &&
              JSON.stringify(entry.edges) === JSON.stringify(edges)
      );
  
      // If it's a duplicate, return the stack unchanged
      if (isDuplicate) {
          return prev;
      }
  
      return [...prev, { nodes, edges }];
  });
    setRedoStack([]);

  };

  const handleUndo = () => {
    console.log(undoStack);
    if (undoStack.length > 0) {
      const lastState = undoStack.pop(); // Get the last state from the undo stack
  
      // Save the current state for redo
      setRedoStack((prev) => [...prev, { nodes, edges }]);
  
      if (lastState) {
        // Restore the previous state
          setNodes(lastState.nodes); // Undo nodes
          setEdges(lastState.edges); // Undo edges
      }
      refreshNode(nodes)
  
      // Update the undo stack
      setUndoStack([...undoStack]);
    }
  };
  
  const handleRedo = () => {
    console.log(redoStack);
    if (redoStack.length > 0) {
      const nextState = redoStack.pop(); // Get the next state from the redo stack
  
      // Save the current state for undo
      setUndoStack((prev) => [...prev, { nodes, edges }]);
  
      if (nextState) {
        // Restore the next state
          setNodes(nextState.nodes); 
          setEdges(nextState.edges); 
      }
      refreshNode(nodes)
      // Update the redo stack
      setRedoStack([...redoStack]);
    }
  };
  
  
  
  const handleNodesChange = (changes) => {
    if (changes[0].dragging !==true && changes[0].type!=="dimensions" ){
      captureState(nodes ,edges);
    }
    onNodesChange(changes);
  };
  
  const handleEdgesChange = (changes) => {
    onEdgesChange(changes);
  };

  const handleConnect = (params) => {

    onConnect(params);
  };


  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'smoothstep',
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          eds
        )
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
    monodir:(props)=>(<NormalNode {...props} edges={edges} updateEdge={updateEdge} handleLabelClick={handleLabelClick}/>),
    computational:(props)=>(<ComputationalNode{...props} edges={edges} />),
    arithop:(props)=>(<ArithmaticOperationNode{...props}nodes = {nodes} edges={edges}/>),
    constantNode:(props)=>(<ConstantNode{...props}nodes = {nodes} edges={edges}/>),
    variablenode:(props)=>(<VariableNode{...props}nodes = {nodes} edges={edges}/>),
    floatingbutton:(props)=>(<FloatingButtons{...props} edges={edges} nodes={nodes} setNodes={setNodes} setEdges={setEdges} reactFlowInstance = {reactFlowInstance} />),
  };




  const handleLabelClick = async () => {
    setLoading(true);
  
    // Define the JSON data to be sent in the request body
    const requestData = HandleExport(nodes, edges);
  
    try {
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST', // Use POST method to send data
        headers: {
          'Content-Type': 'application/json', // Specify content type as JSON
        },
        body: JSON.stringify(requestData), // Convert the request data to a JSON string
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
  
      // Find the start node and its incoming/outgoing edges
      const startNode = nodes.find((node) => node.data.label === 'Add');
      if (!startNode) throw new Error("Start node with label 'Add' not found.");
  
      const incoming_edges = edges.filter((edge) => edge.target === startNode.id);
      const outgoing_edges = edges.filter((edge) => edge.source === startNode.id);
  
      // Update incoming edges with source node values
      incoming_edges.forEach((edge) => {
        if (edge.source !== "1") { // Skip source "1"
          const sourceNode = nodes.find((node) => node.id === edge.source);
          
          if (sourceNode && sourceNode.data && sourceNode.data['Variable Value']) {
            const variableValue = sourceNode.data['Variable Value']; 
            updateEdge(edge, variableValue.value); 
          } else {
            console.warn(`Source node or 'Variable Value' not found for edge ${edge.id}`);
          }
        }
      });
  
      // Update outgoing edges with API result
      outgoing_edges.forEach((edge) => {
        updateEdge(edge, result.result); // Assuming `result.result` holds the desired label
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateEdge = (edge, label) => {
    const updatedEdge = {
      ...edge,
      label,
    };
    setEdges((prevEdges) =>
      prevEdges.map((e) => (e.id === edge.id ? updatedEdge : e))
    );
    setSelectedEdge(updatedEdge);
  };



  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge);
    setSelectedNode(null)
    setMenuPosition(null)
    setSearchVal('')
  };

  const onNodeClick = (event, node) => {
    onNodeClickHandler(event, node, setSelectedNode);
    setPaneMenuPosition(null)
    setMenuPosition(null)
    setSearchVal('')
  };



  const updateEmptyList = () => {
    if (!selectedNode || !selectedNode.data) return; // Ensure selectedNode and data exist
  
    const data = selectedNode.data;
  
    Object.keys(data).forEach((key) => {
      const field = data[key];
  
      // Check if the field has options and no valid value set
      if (field?.options && (!field.value || field.value.trim() === "")) {
        // Update to the first option
        updateNodeProperties(key, field.options[0]);
      }
    });
  };
  


  const updateInputNodes = () => {
    // Find all edges where the target handle starts with "left"
    let edgesToCheck = edges.filter(edge => edge.targetHandle.startsWith("left"));
    
    // Loop over all the edges found
    edgesToCheck.forEach(edge => {
      // Extract the target name from the target handle (split by "-")
      let targetname
      try{
        targetname = edge.targetHandle.split("-")[1];
      }
      catch{
        targetname = edge.targetHandle;
      }
       // Use number 1 as the index
      
      // Calculate the target node index
      const targetNodeIndex = parseInt(edge.target);
      const sourceNodeIndex = parseInt(edge.source);
      
      // Make sure target and source node indices are valid
      if (targetNodeIndex >= 0 && targetNodeIndex <= nodes.length && sourceNodeIndex >= 0 && sourceNodeIndex <= nodes.length) {
        const sourceNode = nodes.find(node => node.id === edge.source);
        const targetNode = nodes.find(node => node.id === edge.target);
        
        // Ensure the target node's id matches the calculated target node index
        if (targetNode.id) {
          // Ensure the source node has the necessary data and the target node can be updated
          if (sourceNode.data && sourceNode.data["Variable Name"] && targetNode.data && targetname in targetNode.data) {
            // Update the target node's value based on the source node's "Variable Value"
            targetNode.data[targetname].value = sourceNode.data["Variable Name"].value;
          }
          else if (sourceNode.data && sourceNode.data["Constant Value"] && targetNode.data && targetname in targetNode.data) {
            targetNode.data[targetname].value = sourceNode.data["Constant Value"].value;
          }
        }
      }
    });
  };
  

  const updateOutputNodes = () => {
    let edgesToCheck = edges.filter(edge => edge.targetHandle.startsWith("right"));
    edgesToCheck.forEach(edge => {
      let targetname
      try{
        targetname = edge.targetHandle.split("-")[1];
      }
      catch{
        targetname = edge.targetHandle;
      }
      const targetNodeIndex = parseInt(edge.target);
      const sourceNodeIndex = parseInt(edge.source);
      if (targetNodeIndex >= 0 && targetNodeIndex <= nodes.length && sourceNodeIndex >= 0 && sourceNodeIndex <= nodes.length) {
        let sourceNode = nodes.find(node => node.id === sourceNodeIndex);
        let targetNode = nodes.find(node => node.id === targetNodeIndex);
      
      if (sourceNode.data && sourceNode.data["Variable Name"] && targetNode.data && targetname in targetNode.data) {
        // Update the target node's value based on the source node's "Variable Value"
        sourceNode.data["Output Name"].value = targetNode.data[targetname].value;
      }
    }
      
  });
}

  const onSaveclick = () =>{
    updateInputNodes()
    // updateOutputNodes()
    updateEmptyList()
    setSelectedNode(null)
    setSelectedEdge(null)
    setMenuPosition(null)
    setSearchVal('')
  }
  const onPaneClick = () =>{
    setInputType(null)
    setPaneMenuPosition(null)
    setSelectedNode(null)
    setSelectedEdge(null)
    setMenuPosition(null)
    setSearchVal('')
  }

//   useEffect(() => {
//     const handlePaste = async (event) => {
//       try {
//         const clipboardText = await navigator.clipboard.readText();
//         importFromJSON(clipboardText, { setNodes, setEdges });
//       } catch (err) {
//         console.error("Failed to read clipboard contents:", err);
//       }
//     };

//     const handleCopy = (event) =>{
//       if (event.type  === 'copy') {
//         try{
//           const modifiedNode = {
//             ...selectedNode,
//             id: uuidv4(), 
//           };;

//           const jsonString = JSON.stringify(modifiedNode, null, 2); 
//           navigator.clipboard
//           .writeText(jsonString)
//           .then(() => {
//             alert('Data copied to clipboard!');
//           })
//           .catch((err) => {
//             console.error('Failed to copy: ', err);
//           })
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
// }
  
//     const handleKeyDown = (event) => {
//       if (event.key === 'Delete') {
//         if (selectedEdge) {
//           deleteEdge(selectedEdge.id);
//         }
//         if (selectedNode) {
//           deleteNode(selectedNode.id);
//         }
//       }
//     };
  
//     if (workspaceRef.current) {
//       workspaceRef.current.addEventListener('paste', handlePaste);
//     }

//     document.addEventListener('copy', handleCopy);
  
//     document.addEventListener('keydown', handleKeyDown);
  
//     return () => {
//       if (workspaceRef.current) {
//         workspaceRef.current.removeEventListener('paste', handlePaste);
//       }
//       document.removeEventListener('keydown', handleCopy);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [selectedNode, selectedEdge, setNodes, setEdges]); 
  

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
    captureState(nodes ,edges); 
  };

  const clearAll = () => {
    setNodes(initialNodes);
    setEdges([]);
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);




  const onInputDrop = useCallback(
    (event, value) => {

      console.log(nodes)
      let color;
      if (value === "Int") {
        color = "#f635ff";
      } else {
        color = "#fff635";
      }
      setSelectedNode(null);
      setPaneMenuPosition(null);
  
      const position = {
        x: event.clientX,
        y: event.clientY,
      };
  
      let newNode;
      if (inputType === "Variable") {
        newNode = structuredClone(varnodes);
        newNode[0].data["Variable Type"] = newNode[0].data["Variable Type"] || {};
        newNode[0].data["Variable Type"]["value"] = value;
        newNode[0].values["Variable Type"] = value;
      } else {
        newNode = structuredClone(constnodes);
        newNode[0].data["Constant Type"] = newNode[0].data["Constant Type"] || {};
        newNode[0].data["Constant Type"]["value"] = value;
        newNode[0].values["Constant Type"] = value;
      }
  
      // Update style immutably
      newNode[0].style = {
        ...newNode[0].style,
        border: `2px solid ${color}`,
        borderRadius: "unset",
      };
  
      setNodes((nds) => {
        const updatedNodes = [
          ...nds,
          {
            id: (nds.length + 1).toString(),
            label: newNode[0]?.label,
            value:
              newNode[0]?.data?.["Variable Type"]?.["value"] ||
              newNode[0]?.data?.["Constant Type"]?.["value"] ||
              newNode[0]?.values?.["Variable Type"] ||
              newNode[0]?.values?.["Constant Type"],
            ...newNode[0],
            position: position,
          },
        ];
        console.log("Updated Nodes:", updatedNodes); // Debug log
        return updatedNodes;
      });
  
      setInputType(null);
    },
    [inputType, setNodes] // Dependencies for useCallback
  );
  



  const onVariableDrop =useCallback(
    (event) => {
    setInputType(null)
    setPaneMenuPosition(null)

    const position = {
      x: event.clientX ,
      y: event.clientY,
    };

    const newNode = structuredClone(varnodes);

    setNodes((nds) => {
      console.log(inputType)
      const updatedNodes = [
      ...nds,
      {
        id: (nds.length + 1).toString(), 
        label: newNode[0].label,
        ...newNode[0], 
        position: position,
      },
      
    ];
    return updatedNodes;
  });
  }, [setNodes]
)



const onConstdrop =useCallback(
  (event) => {
  setInputType(null)
  setPaneMenuPosition(null)

  const position = {
    x: event.clientX ,
    y: event.clientY,
  };

  const newNode = structuredClone(constnodes);

  setNodes((nds) => {
    const updatedNodes = [
    ...nds,
    {
      id: (nds.length + 1).toString(), 
      label: newNode[0].label,
      ...newNode[0], 
      position: position,
    },
    
  ];
  return updatedNodes;
});
}, [setNodes]
)


  const onDrop = useCallback(
    (event) => {
      console.log(nodes, edges)
      captureState(nodes ,edges);
      event.preventDefault();

      const reactFlowBounds = event.target.getBoundingClientRect();
      const nodeProps = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      setNodes((nds) => {
        const updatedNodes = [
        ...nds,
        {
          id: (nds.length + 1).toString(), 
          position,
          ...nodeProps,
        },
      ];
      captureState(updatedNodes, edges);
      return updatedNodes;
    });
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
    setPaneMenuPosition(null)
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

  const handlePaneContextMenu = (event) =>{
    event.preventDefault();
    setSelectedNode(null)
    setMenuPosition(null)
    setPaneMenuPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

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
          ref={workspaceRef}
          onNodesChange={handleNodesChange}
          onEdgesChange={handleEdgesChange}
          // onNodeDragStop={onNodeDragStop}
          onConnect={handleConnect}
          nodeTypes={nodeTypes}
          onPaneClick={onPaneClick}
          onEdgeClick={onEdgeClick}
          onNodeClick={onNodeClick}
          onNodeContextMenu={handleNodeContextMenu}
          onPaneContextMenu={handlePaneContextMenu}
          onInit={handleInit} 
        >
          <Controls />
          <MiniMap />
          {/* <Background variant="dots" gap={12} size={1} /> */}
        </ReactFlow>

        {menuPosition && (
          <div
            className="absolute z-50 bg-white border border-gray-300 rounded-lg pt-4 pb-4 pl-1 pr-1 shadow-md"
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
        {
          paneMenuPosition&&!inputType&&(
            <div
            className="absolute z-50 bg-white border border-gray-300 rounded-lg pt-4 pb-4 pl-1 pr-1 shadow-md"
            style={{
              top: paneMenuPosition.y,
              left: paneMenuPosition.x,
            }}
          >
            <div className="mb-2">
              <button 
                 onClick={()=> setInputType("Variable")}
                className="w-full px-4 py-2 bg-white text-gray-800 font-roboto rounded-md border border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              >
                Variable
              </button>
            </div>
            <div>
              <button
                onClick={() => setInputType("Constant")}
                  className="w-full px-4 py-2 bg-white text-gray-800 font-roboto rounded-md border border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              >
                Constant
              </button>
            </div>
          </div>
          )
        }
        {
          paneMenuPosition&&inputType&&(          
          <div
            className="absolute z-50 bg-white border border-gray-300  pt-4 pb-4 pl-1 pr-1 shadow-md"
            style={{
              top: paneMenuPosition.y,
              left: paneMenuPosition.x,
            }}
          >
            <div className="mb-2">
              <button 
                onClick={(e)=>onInputDrop(e,"Int")} 
                className="w-full px-4 py-2 bg-white text-gray-800 font-roboto rounded-md border border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              >
                int
              </button>
            </div>
            <div>
              <button 
                onClick={(e)=>onInputDrop(e, "String")} 
                className="w-full px-4 py-2 bg-white text-gray-800 font-roboto rounded-md border border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              >
                String
              </button>
            </div>
          </div>

          )
        }
      </div>
      
      <div 
        className="fixed right-0 top-0 h-20 border-l border-gray-300 overflow-auto bg-white shadow-lg"
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
                onClick={onSaveclick} 
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
                undo = {handleUndo}
                redo = {handleRedo}
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
{/* 
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
            )} */}



<div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4">
    {searchVal === "" ? (
      <div>
        <SideBarNew />
        <div className="flex space-x-2 ">
          {/* <button 
            className="flex-grow px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button 
            onClick={clearAll}
            className="flex-grow px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Clear All
          </button> */}
        </div>
      </div>
    ) : (
      <Search 
        searchVal={searchVal} 
        setSearchVal={setSearchVal} 
      />
    )}
  </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default MainWorkSpace;