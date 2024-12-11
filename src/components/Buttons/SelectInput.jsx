import React from 'react';

const SelectInput = ({ name, options, selectedValue, onChange }) => {
  return (
    <select name={name} value={selectedValue || ""} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
