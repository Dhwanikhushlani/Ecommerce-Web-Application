import React, { useState } from 'react'
// import Child from './Child';

const Memo = () => {
    const [count , setCount] = useState(0);
    const [number, setNumber] = useState([10,20,30,40,50]);

    // todo ---> USEMEMO IS USED AS IT IS CALLED ONLY WHEN NUMBER STATE IS CHANGED UNTIL
    // TODO--> THAT IT IS NOT CHANGED AND DOESNT SHOW SUM OUTPUT AS WELL

    const sum = useMemo(() =>{
    const sum = number.reduce((acc,curr)=>{
        console.log("Sum computed");
        return acc+curr;
    })
},[number]);
  return (
    <div className='p-10'>
        <p className='text-gray-200 text-2xl'>{count}</p>
        <button className='bg-gray-200 p--2' onClick={()=>{
            setCount(count+1)}}>Inc Count</button>
            <p className='text-gray-200 text-2xl'>The sum of Number array is : </p>

            {/* HERE NUMBER IS NOT PUSHED BY SETNUMBER WITH FUNCTION PUSH AS RETURN TYPE OF PUSH
             IS ARRAY LENGTH WHICH IS STORED IN SETNUMBER FUNCTION SO INSTEAD OF THET SPREAD(...) 
             FUNCTION IS USED TO PUSH NEW ELEMENT IN ARRAY */}
            <button onClick={()=>{setNumber([...number,1000])}} className='bg-gray-200 p-2'>Push Num to Array
            </button>
    </div>
  )
}

export default Memo