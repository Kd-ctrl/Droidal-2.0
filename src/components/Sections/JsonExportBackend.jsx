import valuestoconvert from "./FieldId";

const HandleExport = (nodes, edges) => {
  const startNode = nodes.find((node) => node.data.label === "start");
  if (!startNode) {
    alert("No start node found");
    return null;
  }

  const result = [];
  const visited = new Set();
  let counter = 1;

  const traverse = (nodeId) => {
    const parentNode = nodes.find((node) => node.id === nodeId);
    if (!parentNode || visited.has(nodeId)) return;

    visited.add(nodeId);

    // Process child nodes (left handle) but skip recursion for their children
    const leftEdges = edges.filter((edge) => edge.target === nodeId && edge.targetHandle.startsWith("left"));
    leftEdges.forEach((edge) => {
      const childNode = nodes.find((node) => node.id === edge.source);
      if (childNode) {
        result.push(processNode(childNode, counter++));
      }
    });

    // Skip appending the start node itself
    if (parentNode.data.label !== "start") {
      result.push(processNode(parentNode, counter++));
    }

    // Navigate to the next parent (bottom handle)
    const bottomEdge = edges.find((edge) => edge.source === nodeId && edge.sourceHandle === "bottom");
    if (bottomEdge) traverse(bottomEdge.target);
  };

  const processNode = (node, labelCounter) => {
    const filteredData = Object.keys(node.values || {}).reduce((acc, key) => {
      if (node.values[key] !== undefined && node.values[key] !== null) {
        acc[key] = node.values[key];
      }
      return acc;
    }, {});
    const label = node.data.label || "";
    const newLabel = valuestoconvert[label] || label; // Fallback to the original label if not mapped
    return { [`n${labelCounter}-${newLabel}`]: filteredData };
  };

  const transformData = (data, keyMap) => {
    return data.map((item) => {
      const newItem = {};
  
      Object.keys(item).forEach((key) => {
        // Extract the prefix (`n{i}-`) and the label portion of the key
        const [prefix, ...labelParts] = key.split("-");
        const labelKey = labelParts.join("-");
  
        // Transform the label part of the outer key using keyMap
        const newLabelKey = keyMap[labelKey] || labelKey;
  
        // Transform the nested keys
        if (typeof item[key] === "object" && !Array.isArray(item[key])) {
          const nestedItem = item[key];
          const newNestedItem = {};
  
          Object.keys(nestedItem).forEach((innerKey) => {
            const newInnerKey = keyMap[innerKey] || innerKey; // Map nested keys
            newNestedItem[newInnerKey] = nestedItem[innerKey];
          });
  
          // Construct the new key with the original prefix and transformed label
          newItem[`${prefix}-${newLabelKey}`] = newNestedItem;
        } else {
          // If the value is not an object, just transform the outer key
          newItem[`${prefix}-${newLabelKey}`] = item[key];
        }
      });
  
      return newItem;
    });
  };
  // Start traversal from the first child nodes of the start node
  const initialEdges = edges.filter(
    (edge) => edge.source === startNode.id && edge.sourceHandle.startsWith("bottom")
  );
  initialEdges.forEach((edge) => traverse(edge.target));

  // Transform the result using the valuestoconvert mapping
  const transformedResult = transformData(result, valuestoconvert);

  return transformedResult;
};

export default HandleExport;
