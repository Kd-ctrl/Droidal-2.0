import React, { memo } from 'react';
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';
import './css/SideBarNew.css';

 
 
const TriDirectionalNode =({ data, id, edges = [] }: NodeProps<BuiltInNode> & { id: string; edges: any[] }) => {


  const incomingEdges = edges.filter((edge) => edge.target === id);
  const outgoingEdgesRight = edges.filter((edge) => edge.source === id && edge.sourceHandle === "right");
  const outgoingEdgesBottom = edges.filter((edge) => edge.source === id && edge.sourceHandle === "bottom");

  // Connection limits
  const maxIncomingConnections = 1; 
  const maxOutgoingConnectionsRight = 1;
  const maxOutgoingConnectionsBottom = 1; 

  const incomingConnectionCount = incomingEdges.length;
  const outgoingConnectionRightCount = outgoingEdgesRight.length;
  const outgoingConnectionBottomCount = outgoingEdgesBottom.length;


  return (
    <div className='TriDirNode' style = {{
        fontSize: '14px',
        padding: '20px 40px', 
        cursor: 'pointer', }}>
      <Handle type="target" position={Position.Top} isConnectable={incomingConnectionCount < maxIncomingConnections} id="left"></Handle> 
      {data?.label}
      <Handle type="source" position={Position.Right} isConnectable={outgoingConnectionRightCount < maxOutgoingConnectionsRight} id="right" ><div style={{ transform: 'rotate(270deg) translateY(15px) translateX(-5px)' }}>False</div></Handle>
      <Handle type="source" position={Position.Bottom} isConnectable={outgoingConnectionBottomCount < maxOutgoingConnectionsBottom} id="bottom" ><div style={{ transform: 'translateX(-10px) translateY(10px)' }}>True</div></Handle> 
    </div>
  );
};
 
export default memo(TriDirectionalNode);