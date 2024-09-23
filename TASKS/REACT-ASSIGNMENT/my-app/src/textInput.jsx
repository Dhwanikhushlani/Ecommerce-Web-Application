import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setText(newValue);
    onTextChange(newValue);  // Pass the current value to the parent
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border p-2"
        placeholder="Type something..."
      />
    </div>
  );
};

export default Text
