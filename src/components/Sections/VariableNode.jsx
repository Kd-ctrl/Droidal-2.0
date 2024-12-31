import React, { memo, useState, useEffect } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";

export default memo(({ id, data, nodes, edges }) => {
  const { updateNodeData } = useReactFlow();

  // Local state for the input values
  const [localValueName, setLocalValueName] = useState("");
  const [localValueValue, setLocalValueValue] = useState("");
  const [localVariableType, setLocalVariableType] = useState("");


  const selected_node = nodes.find((node) => node.id === id);
  // Update local state if external data changes
  useEffect(() => {
    if (data["Variable Name"]?.value !== localValueName) {
      setLocalValueName(data["Variable Name"]?.value || "");
    }
    if (data["Variable Value"]?.value !== localValueValue) {
      setLocalValueValue(data["Variable Value"]?.value || "");
    }
    if (data["Variable Type"]?.value !== localVariableType) {
      setLocalVariableType(data["Variable Type"]?.value || "");
    }
  }, [data]);

  // Handle input changes locally
  const onNameChange = (evt) => {
    setLocalValueName(evt.target.value);
  };

  const onValueChange = (evt) => {
    setLocalValueValue(evt.target.value);
  };

  const onVariableTypeChange = (evt) => {
    setLocalVariableType(evt.target.value);
  };

  // Update node data on blur
  const onNameBlur = () => {
    console.log(selected_node)
    selected_node.values["Variable Name"]=localValueName
    updateNodeData(id, { "Variable Name": { value: localValueName } });
  };

  const onValueBlur = () => {
    selected_node.values["Variable Value"]=localValueValue
    updateNodeData(id, { "Variable Value": { value: localValueValue } });
  };

const onVariableTypeBlur = () => {
    selected_node.values["Variable Type"]=localVariableType
  updateNodeData(id, {
    "Variable Type": {
      value: localVariableType,
      options: data["Variable Type"]?.options || [], 
    },
  });
};

  return (
    <div
      style={{
        fontSize: "14px",
        padding: "3px",
        cursor: "pointer",
      }}
    >
          {data.label === "Variable" ? (data["Variable Name"]?.value  ? data["Variable Name"].value : data?.label) : null}

      <Handle type="source" 
       position={Position.Right} id="right" />
    </div>
  );
});
