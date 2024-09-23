import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const handleColorChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="colorPicker">Choose a color: </label>
      <input
        type="color"
        id="colorPicker"
        onChange={handleColorChange}
        className="p-2"
      />
    </div>
  );
};

export default ColorPicker;
