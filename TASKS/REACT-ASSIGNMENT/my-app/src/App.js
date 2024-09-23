// import React from 'react';
import Greeting from './Greeting';
import ProfileCard from './ProfileCard';
import StatusMessage from './StatusMessage';
import Counter from './Counter';
import React, { useState } from 'react';
import ColorPicker from './colorPicker';
import TextInput from './textInput';
import ToggleSwitch from './ToggleSwitch';
import TodoList from './TodoList';
import ProductCardList from './ProductCardList';

const App = () => {

  const [color, setColor] = useState('#000000');
  const [inputValue, setInputValue] = useState('');
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };
  const todoItems = ['Learn React', 'Practice JavaScript', 'Build a Project'];

    return (
      <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8">Product Cards</h1>
      <ProductCardList />
        {/* // <div  style={{ backgroundColor: color, height: '100vh' }}>
        // <h1 style={{ color: '#fff' }}>Selected Color: {color}</h1>
        // <ColorPicker onColorChange={(newColor) => setColor(newColor)} /> */}

        
            {/* <Greeting name="John" /> */}
            {/* <ProfileCard name="John Doe" age={30} location="New York" />
            <ProfileCard name="Jane Smith" age={25} location="Los Angeles" />
            <ProfileCard name="Alice Johnson" age={28} location="Chicago" />

            <StatusMessage status="success" />
            <StatusMessage status="error" />
            <StatusMessage status="unknown" /> */}

            {/* <Counter /> */}


            {/* <h1>Current Input: {inputValue}</h1>
            <TextInput onTextChange={(value) => setInputValue(value)} /> */}

            {/* <h1>Switch is {isOn ? 'ON' : 'OFF'}</h1>
            <ToggleSwitch toggleState={toggleState} /> */}
            
            {/* <h1>Todo List:</h1>
            <TodoList todos={todoItems} /> */}
        </div>
    );
};

export default App;
