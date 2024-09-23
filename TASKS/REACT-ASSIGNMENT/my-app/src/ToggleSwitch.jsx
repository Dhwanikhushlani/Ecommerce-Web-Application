import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
  return (
    <div>
      <button onClick={toggleState} className="bg-green-500 text-white p-2 rounded">
        Toggle Switch
      </button>
    </div>
  );
};

export default ToggleSwitch;
