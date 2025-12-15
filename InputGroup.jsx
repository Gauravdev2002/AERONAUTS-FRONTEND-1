import React from 'react';

const InputGroup = ({ type, label, value, onChange }) => {
  return (
    <div className="input-group-custom">
      <input 
        type={type} 
        required 
        placeholder=" " 
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default InputGroup;