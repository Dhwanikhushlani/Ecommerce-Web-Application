import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="bg-orange-400 w-4/5 h-4/5 text-3xl flex flex-col justify-center items-center mx-auto mt-10 p-4 rounded-lg">
            <h1 className="mb-6">Count: {count}</h1>
            <div className="flex gap-4">
                <button 
                    onClick={increment} 
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700">
                    Increment
                </button>
                <button 
                    onClick={decrement} 
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-700">
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
