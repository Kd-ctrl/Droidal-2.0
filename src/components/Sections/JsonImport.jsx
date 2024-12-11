const importFromJSON = (clipboardText,{setNodes, setEdges}) => {
  try {
    const clearAll = () => {
      setNodes([]);
      setEdges([]);
    };
    clearAll()
    const clipboardData = JSON.parse(clipboardText); // Assuming data is in JSON format

    if (Array.isArray(clipboardData.nodes)) {
      // Update nodes
      const newNodes = clipboardData.nodes.map((node) => ({
        ...node,
        id: `${node.id}`, 
        position: {
          x: node.position.x + 50,
          y: node.position.y + 50, 
        },
      }));
      setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    } else {
      console.error("Invalid nodes format in clipboard data.");
    }

    if (Array.isArray(clipboardData.edges)) {
      // Update edges
      const newEdges = clipboardData.edges.map((edge) => ({
        ...edge,
        id: `${edge.id}`,
      }));
      setEdges((prevEdges) => [...prevEdges, ...newEdges]);
    } else {
      console.error("Invalid edges format in clipboard data.");
    }
  } catch (error) {
    console.error("Failed to paste clipboard data:", error);
  }
};

export default importFromJSON;
