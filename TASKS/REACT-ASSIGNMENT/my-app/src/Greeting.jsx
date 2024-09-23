import React, { useState } from 'react';

const Greeting = ({ name }) => {
    const [message, setMessage] = useState(`Hello, ${name}!`);

    const changeGreeting = () => {
        setMessage(`Welcome, ${name}!`);
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
};

export default Greeting;
