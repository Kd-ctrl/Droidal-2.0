import HandleExport from '../Sections/JsonExportBackend';
import "./css/TopButton.css"
import importFromJSON from "../Sections/JsonImport";
import { Copy, Download, Clipboard,TicketCheck } from 'lucide-react';




const exportToFile = (nodes, edges) =>{
    let jsonOutput = HandleExport(nodes,edges)
    if (jsonOutput != null){
    jsonOutput = JSON.stringify(jsonOutput);
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
    // Find nodes with at least one unconnected handle
    const unconnectedNodes = nodes.filter((node) => {
      const hasIncomingEdge = edges.some((edge) => edge.target === node.id); // Check for target connections
      const hasOutgoingEdge = edges.some((edge) => edge.source === node.id); // Check for source connections
  
      // Node is unconnected if it lacks either incoming or outgoing edges
      return !hasIncomingEdge && !hasOutgoingEdge;
    });
  
    if (unconnectedNodes.length > 0) {
      // Gather labels of all unconnected nodes
      const unconnectedLabels = unconnectedNodes.map((node) => node.data.label || node.id); // Fallback to id if label is missing
      alert(`Some nodes are unconnected on one or more handles: ${unconnectedLabels.join(', ')}`);
    } else {
      alert('All nodes are fully connected.');
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
