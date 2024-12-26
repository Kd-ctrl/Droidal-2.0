import  { useState, useEffect } from 'react';
import "../Buttons/css/SideBarProp.css"
import onDebugClickHandler from './Debug';
import { Menu, X } from 'lucide-react';

const SideBarProperties = ({ selectedNode, updateNodeProperties, changeSize,onDoubleclick ,setNodes}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCommented, setIsCommented] = useState(false);
  const [isDebug , setIsDebug] = useState(false);
  const [nodeData, setNodeData] = useState(selectedNode ? selectedNode.data : {});
  const [nodevalueData, setNodeValueData] = useState(selectedNode ? selectedNode.values : {});


  useEffect(() => {
    if (selectedNode && selectedNode) {
      setNodeData(selectedNode.data);
      setNodeValueData(selectedNode.values)
      if(selectedNode.data.Comment === "True"){
        setIsCommented(true)
      }
      if(selectedNode.data.Breakpoint === "True"){
        setIsDebug(true)
      }




    }
  }, [selectedNode]);






  const handleSelectChange = (e, key) => {
    const updatedNode = { ...selectedNode };
    const value = e.target.value;
    updateNodeProperties(key, value)
  }
  



  const handleToggleComment = () => {
    onDoubleclick()
    setIsCommented((prevState) => !prevState);
  }

  const handleToggleDebug= () =>{
    onDebugClickHandler(selectedNode)
    setIsDebug((prevState)=>!prevState);
    refreshNode(selectedNode)
  }

  const refreshNode = (nodes) => {
    setNodes((nodes) =>
      nodes.map((node) =>({ ...node }) 
      )
    );
  };


  if (!selectedNode || !selectedNode) {
    return <div>No node selected</div>;
  }


  const handleToggleSize = () => {
    changeSize();
    setIsExpanded(!isExpanded);
  };


  return (
    <>
            <div className='TopBarSec relative'>
            <div 
          className="w-6 h-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={handleToggleSize}
        >
          {isExpanded ? (
            <X 
              className="absolute top-0 left-0 transition-all duration-300"
              style={{
                opacity: !isExpanded ? 1 : 0,
                transform: !isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
              }}
            />
          ):
          (
            <Menu 
              className="absolute top-0 left-0 transition-all duration-300"
              style={{
                opacity: isExpanded ? 1 : 0,
                transform: isExpanded ? 'rotate(0deg)' : 'rotate(90deg)',
              }}
            />
          )} 
        </div>
      </div>

    <div className='header2'>Properties</div>
    <div className="NodeProperties">
      <div className="NodeBody">
      {Object.keys(nodeData).map((key) => {
  if (["label", "driver", "Comment", "Breakpoint", "image", "variableNodes"].includes(key)) {
    return null; // Skip rendering for these keys
  }

  const field = nodeData[key];

  if (field?.type === 'select') {
    return (
      <div key={key} className="PropertyRow">
        <div className="label">{key}:</div>
        <select
          name={key}
          value={field.value?.trim() || field?.options?.[0]}
          onChange={(e) => handleSelectChange(e, key)}
        >
          {field?.options?.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (typeof field?.value === 'string' && key === "Variable Type" || key === "Constant Type") {
    return null; // Skip rendering for "Variable Type"
  } else {
    return (
      <div key={key} className="PropertyRow">
        <div className="label">{key}:</div>
        <input
          type="text"
          name={key}
          value={field.value || ''}
          onChange={(e) => handleSelectChange(e, key)}
        />
      </div>
    );
  }
})}

      </div>
    </div>
    </>
  );
}

      

export default SideBarProperties;
