import React, { memo, useState, useEffect } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";

export default memo(({ id, data, nodes, edges }) => {
  const { updateNodeData } = useReactFlow();

  // Local state for the input values
  const [localValueName, setLocalValueName] = useState("");
  const [localValueValue, setLocalValueValue] = useState("");
  const [localConstantType, setLocalConstantType] = useState("");


  const selected_node = nodes.find((node) => node.id === id);
  // Update local state if external data changes
  useEffect(() => {
    if (data["Constant Name"]?.value !== localValueName) {
      setLocalValueName(data["Constant Name"]?.value || "");
    }
    if (data["Constant Value"]?.value !== localValueValue) {
      setLocalValueValue(data["Constant Value"]?.value || "");
    }
    if (data["Constant Type"]?.value !== localConstantType) {
      setLocalConstantType(data["Constant Type"]?.value || "");
    }
  }, [data]);

  // Handle input changes locally
  const onNameChange = (evt) => {
    setLocalValueName(evt.target.value);
  };

  const onValueChange = (evt) => {
    setLocalValueValue(evt.target.value);
  };

  const onConstantTypeChange = (evt) => {
    setLocalConstantType(evt.target.value);
  };

  // Update node data on blur
  const onNameBlur = () => {
    console.log(selected_node)
    selected_node.values["Constant Name"]=localValueName
    updateNodeData(id, { "Constant Name": { value: localValueName } });
  };

  const onValueBlur = () => {
    selected_node.values["Constant Value"]=localValueValue
    updateNodeData(id, { "Constant Value": { value: localValueValue } });
  };

const onConstantTypeBlur = () => {
    selected_node.values["Constant Type"]=localConstantType
  updateNodeData(id, {
    "Constant Type": {
      value: localConstantType,
      options: data["Constant Type"]?.options || [], 
    },
  });
};

  return (
    <div className="ConstantNode"
      style={{
        fontSize: "14px",
        cursor: "pointer",
      }}
    >


      {/* <select
        onClick={(evt) => evt.stopPropagation()}
        value={localConstantType} 
        onChange={onConstantTypeChange}
        onBlur={onConstantTypeBlur} 
        style={{ display: "block", marginBottom: "10px" }}
      >
        {data["Constant Type"]?.options?.map((eachOption, index) => (
          <option key={index} value={eachOption}>
            {eachOption}
          </option>
        ))}
      </select>
      <input
        placeholder="Enter Constant Name"
        onChange={onNameChange}
        onBlur={onNameBlur}
        onClick={(evt) => evt.stopPropagation()}
        value={localValueName}
        style={{ display: "block", marginBottom: "10px" }}
      /> */}

      <input
        placeholder="Enter Constant Value"
        onChange={onValueChange}
        onBlur={onValueBlur}
        onClick={(evt) => evt.stopPropagation()}
        value={localValueValue}
        style={{ display: "block", width:"100px" , height:"10px" }}
      />

      <Handle type="source"        style={{
          backgroundColor: 'transparent',
          border: '3px solid #aaa',
          width: '1px',
          height: '10px',
          borderRadius: '50%',
        }}  position={Position.Right} id="right" />
    </div>
  );
});
