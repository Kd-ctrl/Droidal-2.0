import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
 
export default memo(({ id, data }) => {
    // const [LeftHandles] = useState(["variables1","variables2"]); 
    const LeftHandles = data.variableNodes;
    let handleQuantity = LeftHandles?.length+1
    let color

  return (
    //  <div className='flex'>
            <div className='MonoDirNode'> 
{/* Single top handle */}
      <Handle type="target" position={Position.Top} id="top" />

      {/* Dynamic left handles */}
      <div className="w-3/12">
        {
        LeftHandles?.map((value, index) => {
          let handleType = value.split("=")[1]
          if (handleType === "string"){
            color = "yellow"
          }
          else if (handleType === "int"){
            color = "pink"
          }
         return (
          <div key={`container-${index}`}>
            <Handle
              key={`left-${index}-${value}`} // Ensure unique key
              type="target"
              title={`${value}`}
              position={Position.Left}
              id={`left-${index}-${value}`} // Unique ID
              style={{
                top: `${(50 / handleQuantity) * (index + 1)}px`,
                backgroundColor: `${color}`,
                border: `2px solid ${color}`,
              }}
            />
          </div>
        )}
        )}
      </div>

      {/* Middle content */}
      <div className="w-3/6">
        {data.image ? (
          <img
            style={{ width: '50px', height: '50px' }}
            src={data.image}
            alt={data.label}
          />
        ) : (
          <>{data.label}</>
        )}
      </div>

      {/* Single right handle */}
      <div className="w-3/12">
        <Handle type="source" position={Position.Right} id="right" />
      </div>

      {/* Single bottom handle */}
      <Handle type="source" position={Position.Bottom} id="bottom" />
    </div>
  );
});