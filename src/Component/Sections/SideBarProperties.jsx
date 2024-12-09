import React, { useState, useEffect } from 'react';
import SelectInput from '../Buttons/SelectInput';
import RadioInput from '../Buttons/RadioInput';
import TextInput from '../Buttons/TextInput';
import "../Buttons/css/SideBarProp.css"
import TopButton from '../Buttons/TopButton';

const SideBarProperties = ({ selectedNode, updateNodeProperties, changeSize }) => {
  const [nodeData, setNodeData] = useState(selectedNode ? selectedNode.data : {});
  const [nodevalueData, setNodeValueData] = useState(selectedNode ? selectedNode.values : {});


  useEffect(() => {
    if (selectedNode && selectedNode) {
      setNodeData(selectedNode.data);
      setNodeValueData(selectedNode.values)
    }
  }, [selectedNode]);






  const handleSelectChange = (e, key) => {
    const updatedNode = { ...selectedNode };
    const value = e.target.value;
    updateNodeProperties(key, value)
  }
  







  if (!selectedNode || !selectedNode) {
    return <div>No node selected</div>;
  }





  return (
    <>
            <div className='TopBarSec'><img src="move.png" alt="shrink/expand" style ={{width: "20px"}} onClick={changeSize}></img></div>
    <h3>Properties</h3>
    <div className="NodeProperties">
      <div className="NodeBody">
        {Object.keys(nodeData).map((key) => {
          if (!["label", "driver", "Comment","Breakpoint"].includes(key)) {
          const field = nodeData[key];

          return (
            
            <div key={key} className="PropertyRow">
              
              <div className='label'>{key}:</div>

              {/* Check for the type of the field and render accordingly */}
              {field?.type === 'select' ? (
                <select 
                  name={key}
                  value={field.value}
                  onChange={(e) => handleSelectChange(e, key)}
                >
                  {field?.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field?.type === 'radio' ? (
                <div>
                  {field?.options?.map((option, idx) => (
                    <div className='label' key={idx}>
                      <input
                        type="radio"
                        name={key}
                        value={option}
                        checked={field.value === option}
                        onChange={(e) => handleSelectChange(e, key)}
                      />
                      {option}
                    </div>
                  ))}
                </div>
              ) : (
                
                <input
                  type="text"
                  name={key}
                  value={field.value || ''}
                  onChange={(e) => handleSelectChange(e, key)}
                />
              )}
            </div>
          );
}})}
      </div>
    </div>
    </>
  );
}

      

export default SideBarProperties;
