import React, { useRef, useCallback, useState, useEffect } from 'react';

import valuestoconvert from "./FieldId";




const HandleExport = (nodes, edges) => {
  let connectedNode = null;
// const [edgesToTraverse , setEdgesToTraverse] =  useState(null)
// const [nextEdgeToTransverse , setNextEdgeToTransverse] =  useState(null)

  const startNode = nodes.filter((node) => node.data.label === "start");
  const nextNode = edges
  .filter((edge) => edge.source === startNode[0].id) // Find edges originating from the startNode
  .find((edge) => edge.sourceHandle === "bottom"); // Filter for the bottom connection

  if (nextNode) {
    connectedNode = (nodes.find((node) => node.id === nextNode.target))
  }

  let i = 1; // Counter for node labels

  if (startNode.length > 1) {
    alert("🚨 Error: Multiple 'start' nodes detected!");
    console.error("Multiple 'start' nodes found.");
    return null;
  } else if (startNode.length < 1) {
    alert("No start node found");
    console.error("Start node not found!");
    return null;
  } else {
    const visited = new Set(); // Track visited nodes
    const result = []; // Store processed node data
    let parentNode = null; // Replace `useState` with a variable

    const traverse = (nodeId, isChild = false) => {


      const currentNode = nodes.find((node) => node.id === nodeId);
      if (currentNode) {
        // Add node data to the result  
        const filteredData = Object.keys(currentNode.values || {}).reduce((acc, key) => {
          if (currentNode.values[key] !== undefined && currentNode.values[key] !== null) {
            acc[key] = currentNode.values[key];
          }
          return acc;
        }, {});
        const label = currentNode.data.label || "";
        const new_label = valuestoconvert[label];

        result.push({ [`n${i}-${new_label}`]: filteredData });
        i += 1;

        // Determine edges to traverse
        if (!isChild){
        let edgesToTraverse;
        let nextEdgeToTransverse;

          edgesToTraverse = edges.filter(
            (edge) => edge.target === nodeId && edge.targetHandle.startsWith("left")
          );

          edgesToTraverse.forEach((edge) =>
            traverse(edge.source, true)
          );
          nextEdgeToTransverse = edges.filter(
            (edge) => edge.source === nodeId && edge.sourceHandle === "bottom"
          );
          

          nextEdgeToTransverse.forEach((edge) =>
            traverse(edge.target,false)
          );
        }

      }
    };

    // Start traversal from the start node (node with ID `2`)
    traverse(connectedNode.id);

    // Function to transform the keys using the provided key mapping
    const transformData = (data, keyMap) => {
      return data.map((item) => {
        const newItem = { ...item }; // Keep top-level keys unchanged

        Object.keys(item).forEach((key) => {
          if (typeof item[key] === "object" && !Array.isArray(item[key])) {
            const nestedItem = item[key];
            const newNestedItem = {};

            Object.keys(nestedItem).forEach((innerKey) => {
              const newInnerKey = keyMap[innerKey] || innerKey; // Map nested keys
              newNestedItem[newInnerKey] = nestedItem[innerKey];
            });

            newItem[key] = newNestedItem; // Update with transformed nested object
          }
        });

        return newItem;
      });
    };

    // Transform the collected result
    const transformedData = transformData(result, connectedNode);
    return transformedData;
  }
};

export default HandleExport;
