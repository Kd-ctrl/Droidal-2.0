
import valuestoconvert from "./FieldId";


const handleExport = (nodes, edges) => {

  
  const startNode = nodes.filter((node) => node.data.label === 'start');
  let i =1 // Replace with your criteria

  if (startNode.length > 1) {
    console.log("There are multiple 'start' nodes.");
    alert(`🚨 Error: Multiple "start" nodes detected!`);
    return null;
  } else if (startNode.length < 1) {
    alert(`No start node found`);
    console.error('Start node not found!');
    return null;
  } else {
    const visited = new Set();
    const result = [];
    const traverse = (nodeId, child ="false") => {
      if (visited.has(nodeId)) return;
      visited.add(nodeId);

      // Find the node by ID
      const currentNode = nodes.find((node) => node.id === nodeId);
      if (currentNode) {

        // Add node data to the result
        const filteredData = Object.keys(currentNode.values || {}).reduce((acc, key) => {
          if (currentNode.values[key] !== undefined && currentNode.values[key] !== null) {
            acc[key] = currentNode.values[key];
          }
          return acc;
        }, {});
        const label = currentNode.data.label ? currentNode.data.label : '';
        const new_label = valuestoconvert[label]
        
        result.push({ [`n${i}-${new_label}`]: filteredData });
        i+=1

        // Find the edges originating from the current node
        if (child === "false"){
        const connectedEdges = edges.filter((edge) => edge.source === nodeId || (edge.target === nodeId && edge.sourceHandle !== "bottom"));
        const nextEdge =edges.filter((edge) => edge.source === nodeId && edge.sourceHandle === "bottom");
        if (connectedEdges){
          connectedEdges.forEach((edge) => traverse(edge.target), "true");
        }
        else if (nextEdge){
          nextEdge.forEach((edge) => traverse(edge.target));
        }
      }
      }
    };

    // Start traversal from the start node
    traverse('2');



  // Function to transform the keys using the provided key mapping
  const transformData = (data, keyMap) => {
    return data.map(item => {
      const newItem = { ...item }; // Keep top-level keys unchanged
  
      Object.keys(item).forEach(key => {
        if (typeof item[key] === 'object' && !Array.isArray(item[key])) {
          const nestedItem = item[key];
          const newNestedItem = {};
  
          Object.keys(nestedItem).forEach(innerKey => {
            const newInnerKey = keyMap[innerKey] || innerKey; // Map nested keys
            newNestedItem[newInnerKey] = nestedItem[innerKey];
          });
  
          newItem[key] = newNestedItem; // Update with transformed nested object
        }
      });
  
      return newItem;
    });
  };




  // Transform inputData with the new key mapping
    const transformedData = transformData(result, valuestoconvert);
    const jsonOutput = transformedData
    return jsonOutput;
  }
};

export default handleExport;
