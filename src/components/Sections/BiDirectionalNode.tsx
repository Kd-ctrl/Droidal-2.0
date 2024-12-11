import React, { memo } from 'react';
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';

const BiDirectionalNode = ({ data, id, edges = [] }: NodeProps<BuiltInNode> & { id: string; edges: any[] }) => {
  // Calculate incoming and outgoing edges
  const incomingEdges = edges.filter((edge) => edge.target === id);
  const outgoingEdges = edges.filter((edge) => edge.source === id);

  // Connection limits
  const maxIncomingConnections = 1; // Maximum incoming connections allowed
  const maxOutgoingConnections = 1; // Maximum outgoing connections allowed

  const incomingConnectionCount = incomingEdges.length;
  const outgoingConnectionCount = outgoingEdges.length;

  return (
    <div className='MonoDirNode' style={{
      fontSize: '14px',
      padding: '10px',
      cursor: 'pointer'
    }}>
      <Handle
        type="target"
        position={Position.Top}
        id="left"
        isConnectable={incomingConnectionCount < maxIncomingConnections} // Enable only if below limit
      />
      {data["image"]? <img src = {data["image"]} style={{width:'30px',height:"30px"}}/>: ""}
      {data?.label}
      <Handle
        type="source"
        position={Position.Bottom}
        id="right"
        isConnectable={outgoingConnectionCount < maxOutgoingConnections} // Enable only if below limit
      />
    </div>
  );
};

export default memo(BiDirectionalNode);
