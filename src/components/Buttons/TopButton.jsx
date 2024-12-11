import handleExport from '../Sections/JsonExportBackend';
import "./css/TopButton.css"
import importFromJSON from "../Sections/JsonImport";
import { Copy, Download, Clipboard,TicketCheck } from 'lucide-react';




const exportToFile = (nodes, edges) =>{
    let jsonOutput = handleExport(nodes,edges)
    if (jsonOutput != null){
    const blob = new Blob([jsonOutput], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'reactflow-ordered-export.json';
    link.click();
    URL.revokeObjectURL(url);
    }
}


const copyToClipboard = (nodes, edges) => {
    const data = { nodes, edges }; 
    const jsonString = JSON.stringify(data, null, 2); 
    navigator.clipboard
      .writeText(jsonString)
      .then(() => {
        alert('Data copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };


  const handlePaste = async (setNodes, setEdges) => {

    
    try {
      const clipboardText = await navigator.clipboard.readText();
      importFromJSON(clipboardText, setNodes, setEdges);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };


const validateButton = (nodes, edges) => {
  // Filter out all nodes except the 'start' node
  const allButStartNodes = nodes.filter((node) => node.data.label !== 'start');

  const unconnectedNodes = allButStartNodes.filter((node) => {
    // Check if the node has any incoming edge
    const hasIncomingEdge = edges.some((edge) => edge.target === node.id);
    return !hasIncomingEdge; // Keep nodes with no incoming edges
  });

  if (unconnectedNodes.length > 0) {
    const all_node_id= [];
    console.log('Unconnected Nodes:', unconnectedNodes);
    unconnectedNodes.forEach((unconnodes)=>{
      all_node_id.push(unconnodes.data.label)
    })
    alert(`Some nodes are not connected to any edges!: ${all_node_id.join(', ')}`);
  } else {
    alert('All nodes are connected.');
  }
};

const TopButton = ({ nodes, edges, setNodes, setEdges }) => {
  return (
    <div className='TopButtons'>
            <TicketCheck 
      className="TopValidateButton cursor-pointer w-5 h-5"
      onClick={() => validateButton(nodes, edges)}/>
      <Copy
        className="TopNavButtonCC cursor-pointer w-5 h-5" 
        onClick={() => copyToClipboard(nodes, edges)}
      />


      {/* Paste Icon */}
      <Clipboard
        className="TopNavButtonPT cursor-pointer w-5 h-5" 
        onClick={() => handlePaste({ setNodes, setEdges })}
      />

      <Download
        className="TopNavButtonEP cursor-pointer w-5 h-5"
        onClick={() => exportToFile(nodes, edges)}
      />
    </div>
  );
};

export default TopButton;
