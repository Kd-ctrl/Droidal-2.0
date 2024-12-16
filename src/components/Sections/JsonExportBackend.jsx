const handleExport = (nodes, edges) => {
  const startNode = nodes.filter((node) => node.data.label === 'start'); // Replace with your criteria

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

    const traverse = (nodeId) => {
      if (visited.has(nodeId)) return;
      visited.add(nodeId);

      // Find the node by ID
      const currentNode = nodes.find((node) => node.id === nodeId);
      if (currentNode) {
        // Before processing the current node, handle any nodes that connect to it
        const incomingEdges = edges.filter((edge) => edge.target === nodeId);
        incomingEdges.forEach((edge) => {
          if (!visited.has(edge.source)) {
            traverse(edge.source); // Process upstream nodes first
          }
        });

        // Add node data to the result
        const filteredData = Object.keys(currentNode.values || {}).reduce((acc, key) => {
          if (currentNode.values[key] !== undefined && currentNode.values[key] !== null) {
            acc[key] = currentNode.values[key];
          }
          return acc;
        }, {});
        const label = currentNode.data.label ? currentNode.data.label : '';
        result.push({ [label]: filteredData });

        // Find the edges originating from the current node
        const connectedEdges = edges.filter((edge) => edge.source === nodeId);

        // Recursively traverse connected nodes
        connectedEdges.forEach((edge) => traverse(edge.target));
      }
    };

    // Start traversal from the start node
    traverse(startNode[0].id);
    console.log(result)
    return result ? result : null;

  }
};

export default handleExport;
