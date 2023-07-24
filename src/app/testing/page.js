'use client'
import React, { useState } from 'react';

const Testing = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (!event.target.value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        className={isFocused ? "inputFieldFocused" : "inputField"}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className={isFocused ? "labelFocused" : "label"}>Lebal</label>
    </div>
  );
};

export default Testing;