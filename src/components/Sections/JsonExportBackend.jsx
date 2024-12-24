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

  // Start traversal from the first child nodes of the start node
  const initialEdges = edges.filter(
    (edge) => edge.source === startNode.id && edge.sourceHandle.startsWith("bottom")
  );
  initialEdges.forEach((edge) => traverse(edge.target));

  return result;
};

export default HandleExport;

