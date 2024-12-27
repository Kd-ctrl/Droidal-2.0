import React, { useState,useEffect } from 'react';
import './css/SideBarNew.css';
import buttonProperties from '../Buttons/ButtonList.jsx';

const Search = ({searchVal, setSearchVal}) => {
//   const [searchVal, setSearchVal] = useState();
  const [filteredSections, setFilteredSections] = useState(buttonProperties);

  useEffect(() => {
    if (!searchVal) {
      setFilteredSections(buttonProperties);
      return;
    }

    const query = searchVal.toLowerCase();

    const filtered = Object.keys(buttonProperties).reduce((acc, sectionKey) => {
      const section = buttonProperties[sectionKey];
      const filteredButtons = Object.keys(section).filter((key) =>
        section[key].label.toLowerCase().includes(query)
      );

      if (filteredButtons.length > 0) {
        acc[sectionKey] = filteredButtons.reduce((filteredObj, key) => {
          filteredObj[key] = section[key];
          return filteredObj;
        }, {});
      }
      return acc;
    }, {});

    setFilteredSections(filtered);
  }, [searchVal]); 

  const handleDragStart = (event, nodeProps) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeProps));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    // <div className="sidebar">
    //   <input
    //     type="text"
    //     className="search-box"
    //     placeholder="Search Buttons"
    //     value={searchVal}
    //     onChange={handleSearchChange}
    //   />
<div className="button-container flex flex-wrap gap-4 max-h-[40vh] overflow-y-auto overflow-x-auto">
  {Object.keys(filteredSections).map((sectionKey) => {
    const section = filteredSections[sectionKey];
    return (
      <div key={sectionKey} className="section flex-shrink-0 w-64">
        {/* Section header */}
        <div className="header text-lg font-semibold px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
  {sectionKey}
</div>


        {/* Buttons for the section */}
        <div className="button-list flex flex-wrap gap-2 mt-2">
          {Object.keys(section).map((key) => {
            const button = section[key];
            return (
              <div
                key={key}
                className="button-card-small p-2 bg-blue-500 text-white rounded-md cursor-pointer text-[10px]"
                draggable
                onDragStart={(e) => handleDragStart(e, button.nodeProps)}
              >
                {button.label}
              </div>
            );
          })}
        </div>
      </div>
    );
  })}
</div>


    // </div>
  );
};

export default Search;
