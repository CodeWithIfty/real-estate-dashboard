import React, { useState } from 'react';
import "../index.css";

function FloatingLabelInput({ label, value, onChange }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(value === ''); // Only set focused to false if the input is empty
  };

  return (
    <div className={`floating-label-input ${focused || value ? 'focused' : ''} w-72`}>
      <input
        type="text"
        defaultValue={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label>{label}</label>
    </div>
  );
}

export default FloatingLabelInput;
