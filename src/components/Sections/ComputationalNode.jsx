import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
 
export default memo(({ id, data }) => {
    const [LeftHandles, setLeftHandles] = useState([0]); // Dynamic handles on the right

    const addHandle = () => {
        setLeftHandles((prev) => [...prev, prev.length+1]); // Add a new handle
    };
  return (
            <div >
            <img style={{width:"50px",height:"50px" }} src = "Plus-sign.png"/> 

        {/* Single top handle */}
        <Handle type="target" position={Position.Top} id="top" />

        {/* Single left handle */}
        <Handle type="source" position={Position.Right} id="right" />


        {/* Dynamic right handles */}
        {LeftHandles.map((index) => (
        <Handle
            key={`left-${index}`}
            type="target"
            position={Position.Left}
            id={`left-${index}`}
            style={{ width:"2px", height:"2px" }}
        />
        ))}

        {/* Button to add handles (for demonstration) */}
        {/* <div>
        <button onClick={addHandle} style={{ marginTop: 50 }}>
        add left handle
        </button>
        </div> */}
    </div>
  );
});