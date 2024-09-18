import React from 'react'
import Child2 from './Child2'

const Child1 = ({count ,setCount}) => {
  return (
    <div className='bg-green-200 w-4/5 h-4/5 flex flex-col justify-center items-center'>
        Child1
    <Child2 count={count} setCount={setCount}/>
    </div>
  )
}

export default Child1