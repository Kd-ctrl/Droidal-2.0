import React, { useState } from 'react';
import './css/SideBarNew.css';
import buttonProperties from '../Buttons/ButtonList.jsx';
import {ChevronUp, ChevronDown} from 'lucide-react';
import { Widgets } from '@mui/icons-material';

const SideBarNew = () => {
  // Store the expanded section key
  const [expandedSection, setExpandedSection] = useState(null);

  // Toggle function to open and close sections
  const toggleSection = (sectionKey) => {
    setExpandedSection((prevState) =>
      prevState === sectionKey ? null : sectionKey // Collapse if same section is clicked, otherwise expand the new section
    );
  };

  // Handle drag-and-drop logic
  const handleDragStart = (event, nodeProps) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeProps));
    event.dataTransfer.effectAllowed = 'move';
  };

  // Deep copy utility function for drag data
  const deepCopy = (data) => JSON.parse(JSON.stringify(data));

  return (
    <div className="button-container">
      {/* Section Titles (Tabs) */}
      <div className="section-container flex space-x-4 mb-4">
        {Object.keys(buttonProperties).map((sectionKey) => {
          const isExpanded = expandedSection === sectionKey;

          return (
            <div
              key={sectionKey}
              className={`section-title flex items-center justify-between px-1 py-1 cursor-pointer rounded-t-lg transition-all duration-300 ${
                isExpanded
                  ? 'bg-blue-500 text-white border-b-2 border-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => toggleSection(sectionKey)}
            >
              {sectionKey}
              {/* Arrow toggle icon */}
              <span>{isExpanded ? <ChevronUp/> : <ChevronDown/>}</span>
            </div>
          );
        })}
      </div>

      {/* Render only the expanded section's button list */}
      {expandedSection && (
        <div className="section mb-4">
          {/* Get the section for the expanded section */}
          {Object.keys(buttonProperties).map((sectionKey) => {
            if (sectionKey === expandedSection) {
              const section = buttonProperties[sectionKey];

              return (
                <div key={sectionKey}>
                  {/* Buttons (horizontally aligned at the bottom when expanded) */}
                  <div className="button-list flex space-x-2  bg-gray-100 rounded-b-lg overflow-x-auto">
                    {Object.keys(section).map((key) => {
                      const button = section[key];
                      return (
                        <div
                          key={key} 
                          className="button-card bg-blue-500 text-white rounded-md cursor-pointer"
                          draggable
                          onDragStart={(e) =>
                            handleDragStart(e, deepCopy(button.nodeProps))
                          }
                        >
                          <img className="flex justify-center items-center h-12" src={button.nodeProps.data.image} style={{ width: "30px", justifyContent: "center", height: "30px", textAlign:"center" }}></img>
                          {button.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default SideBarNew;
