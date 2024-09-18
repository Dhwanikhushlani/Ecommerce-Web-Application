import React, { useCallback, useState } from 'react'
import Child from './Child';

const Callback = () => {
    const [count , setCount] =useState(0);

    // todo---> FUNCTION IS DEFINEDD IN USECALLBACK TO AVOID WASTE COMPUTATION POWER
    const increment = useCallback(()=>{

        // todo --> ANOTHER WAY TO INNCREASE COUNT OF COUNT USING PREV 
        // TODO --->setCount((prev)=>prev+1);   
        setCount(count +1);
    })
  return (
    <div className='p-10'>
        <p className='bg-gray-500 text-2xl'>{count}</p>
        <button className='bg-gray-500 p-2' onClick={increment}>Inc Count</button>
        <Child />
    </div>
  )
}

export default Callback