// import React  from "react";

//  PARENT TO CHILD DATA TRANSFER
// const Child =({count})=>{
//     return(
//         <div className='text-2xl bg-green-300 p-5 m-5'>
//             Child 1
//             <p>The value of count inside child is : {count}</p>
//         </div>
//     )
// }


// CHILD TO PARENT DATA TRANSFER

// const Child =({count, setCount})=>{
//     return(
//         <div className='text-2xl bg-cyan-300 p-5 m-5'>
//             Child 1
//             <p>The value of count inside child is : {count}</p>
//             <button className="bg-yellow-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
//         setCount(count+1);
//       }}>Inc Count(+)</button>
//       <button className="bg-pink-200 p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
//         setCount(count-1);
//       }}>Dec Count(-)</button>
//         </div>
//     )
// }

// 31 AUGUST 2024

import React from 'react'
import Child1 from './Child1'

// const Child = ({count ,setCount}) => {
//   return (
//     <div className='bg-orange-400 w-4/5 h-4/5 text-3xl flex flex-col justify-center items-center '>
//       Child
//     <Child1 count={count} setCount={setCount}/>
//     </div>
    
//   )
// }

// TODO---> CHILDREN COMPONENT RENDERED TTOO MANY TIMES VIA MEMO SO IT IS CONTROLLED 
//TODO ---> BY USING REACT.MEMO FUNCTION AS BELOW

const Child = React.memo(() => {
  console.log("Child component rendered");
  return (
    <div className='bg-orange-400 w-4/5 h-4/5 text-3xl flex flex-col justify-center items-center '>
      Child
    {/* <Child1 count={count} setCount={setCount}/> */}
    </div>
    
  )
})

export default Child