import handleExport from '../Sections/JsonExportBackend';
import "./css/TopButton.css"
import importFromJSON from "../Sections/JsonImport";
import { Copy, Download, Clipboard } from 'lucide-react';




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



const TopButton = ({ nodes, edges, setNodes, setEdges }) => {
  return (
    <div className='TopButtons'>
      <Copy
        className="TopNavButtonCC cursor-pointer w-5 h-5" 
        onClick={() => copyToClipboard(nodes, edges)}
      />
      <Download
        className="TopNavButtonEP cursor-pointer w-5 h-5"
        onClick={() => exportToFile(nodes, edges)}
      />

      {/* Paste Icon */}
      <Clipboard
        className="TopNavButtonPT cursor-pointer w-5 h-5" 
        onClick={() => handlePaste({ setNodes, setEdges })}
      />
    </div>
  );
};

export default TopButton;
