import React, { useState } from 'react';
import './css/SideBarNew.css';
import buttonProperties from '../Buttons/ButtonList.jsx';

const SideBarNew = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  const handleDragStart = (event, nodeProps) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeProps));
    event.dataTransfer.effectAllowed = 'move';
  };

  const deepCopy = (data) => JSON.parse(JSON.stringify(data));

  return (
    <div className="button-container">
      {Object.keys(buttonProperties).map((sectionKey) => {
        const section = buttonProperties[sectionKey];
        const isExpanded = expandedSections[sectionKey];

        return (
          <div key={sectionKey} className="section mb-4">
          {/* Section Title (styled as a tab) */}
          <div
            className="section-title flex items-center justify-between px-4 py-2 bg-gray-200 cursor-pointer rounded-t-lg"
            onClick={() => toggleSection(sectionKey)}
          >
            {sectionKey}
            <span>{isExpanded ? '▲' : '▼'}</span> {/* Arrow toggle */}
          </div>
  
          {/* Buttons (horizontally aligned at the bottom when expanded) */}
          {isExpanded && (
            <div className="button-list flex space-x-2 p-4 bg-gray-100 rounded-b-lg overflow-x-auto">
              {Object.keys(section).map((key) => {
                const button = section[key];
                return (
                  <div
                    key={key}
                    className="button-card p-2 bg-blue-500 text-white rounded-md cursor-pointer"
                    draggable
                    onDragStart={(e) =>
                      handleDragStart(e, deepCopy(button.nodeProps))
                    }
                  >
                    {button.label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
};

export default SideBarNew;
