import React, { memo } from 'react';
import {
  type BuiltInNode,
  type NodeProps,
  Handle,
  Position,
} from '@xyflow/react';

const MonoDirNode = ({ data, id, edges = [] }: NodeProps<BuiltInNode> & { id: string; edges: any[] }) => {
  // Calculate incoming and outgoing edges
  const outgoingEdges = edges.filter((edge) => edge.source === id);



  const maxOutgoingConnections = 1; // Maximum outgoing connections allowed

  const outgoingConnectionCount = outgoingEdges.length;

  return (
    <div className='MonoDirNode' style={{
      fontSize: '14px',
      padding: '10px',
      cursor: 'pointer'
    }}>
      {data?.label}
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        isConnectable={outgoingConnectionCount < maxOutgoingConnections} 
      />
    </div>
  );
};

export default memo(MonoDirNode);
