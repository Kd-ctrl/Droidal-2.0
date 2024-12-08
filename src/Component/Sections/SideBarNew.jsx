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
          <div key={sectionKey} className="section">
            {/* Section Title */}
            <div
              className="section-title"
              onClick={() => toggleSection(sectionKey)}
            >
              {sectionKey}
              {/* <span>{isExpanded ? '▲' : '▼'}</span> */}
            </div>

            {/* Buttons */}
            {isExpanded && (
              <div className="button-list">
                {Object.keys(section).map((key) => {
                  const button = section[key];
                  return (
                    <div
                      key={key}
                      className="button-card"
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, deepCopy(button.nodeProps))
                      } // Drag-and-drop logic
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
