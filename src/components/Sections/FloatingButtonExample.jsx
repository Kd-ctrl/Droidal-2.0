import React, { memo } from 'react';

const templates = [
  { label: 'Template A', data: { label: 'Template A Node' } },
  { label: 'Template B', data: { label: 'Template B Node' } },
  { label: 'Template C', data: { label: 'Template C Node' } },
];

const FloatingButtons = memo(({ nodes, setNodes, reactFlowInstance }) => {
  const handleAddNode = (template) => {
    if (!reactFlowInstance) {
      console.error('React Flow instance is not initialized');
      return;
    }

    // Define the position of the new node
    // const position = reactFlowInstance.project({ x: 200, y: 200 }); 

    const newNode = {
      id: `node-${nodes.length + 1}`, // Ensure unique IDs
      position: {x:200,y:200  },
      data: template.data,
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <>
    hike
    <div
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {templates.map((template) => (
        <button
          key={template.label}
          onClick={() => handleAddNode(template)}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          Add {template.label}
        </button>
      ))}
    </div>
    </>
  );
});

export default FloatingButtons;
