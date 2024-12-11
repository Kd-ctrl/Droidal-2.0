import React from 'react';

const RadioInput = ({ name, options, selectedValue, onChange }) => {
  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`${name}-${option}`}
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={onChange}
          />
          <label htmlFor={`${name}-${option}`}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default RadioInput;
