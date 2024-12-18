import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { useState } from 'react';
 
export default memo(({ id, data }) => {
    // const [LeftHandles] = useState(["variables1","variables2"]); 
    const LeftHandles = data.variableNodes;
    let handleQuantity = LeftHandles.length

  return (
            <div > 
               {data.image ? (
        <img style={{ width: "50px", height: "50px" }} src={data.image} alt={data.label} />
      ) : (
        <>{data.label}</>
      )}
           

        {/* Single top handle */}
        <Handle type="target" position={Position.Top} id="top" />

        {/* Single left handle */}
        <Handle type="source" position={Position.Right} id="right" />


        {/* Dynamic right handles */}

        {LeftHandles.map((value, index) => (
                <Handle
                    key={`left-${value}`}
                    type="target"
                    position={Position.Left}
                    id={`left-${value}`}
                    style={{
                      top: `${(index + 1) * (50 / (handleQuantity + 1))}px`,
                    }}  
                />
            ))}






        <Handle type="source" position={Position.Bottom} id="bottom"/>
    </div>
  );
});