
const exportAsJSON = (nodes,edges) => {
    const flowData = { nodes, edges };
    const jsonString = JSON.stringify(flowData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'reactflow-export.json';
    link.click();
  };


export default exportAsJSON