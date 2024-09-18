import React, { useEffect, useRef } from 'react'

const Ref = () => {
// todo ---->  WE HAVE TWO COMPONENTS CONTROL AND UNCONTROLLED COMPONENTS --> CONTROL COMPONENTS
// TODO --> ARE CONTROLLED BY STATES AND REACT WHILE UNCONTROLLED COMPONENTS ARE CONTROLLED BY REF COMPONENTS.
 
    const inputRef = useRef();

    // console.log(inputRef);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    // <div>Ref Commponent</div>
    <div className='p-8 text-black'>
        <input ref={inputRef} type="text" placeholder='Enter Name' />
        <button onClick={()=>{console.log(inputRef.current.value)}} className='text-white border bg-purple-500'>
            Show Ref Value</button>
    </div>
  )
}

export default Ref