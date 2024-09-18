import React, {useContext} from 'react'
import { CountContext } from './context/CountProvider'

// THIS DEFININIG OF COMPONENT IN EACH OTHER IS KNOWN AS PROP DRILLING
// USING COUNT FROM ONE STATE TO ANOTHER STATE FOLLOWS A VERY LONG ROUTE AS PROP DRILLING CAUSE PROBLEMS
// SOLUTION : CONTEXT API AND REDUX 
// REDUX ---> EXTERNAL LIBRARY INSTALLED EXTERNALLY ---> USED IN BIG APPLICATION ---> ADVANCE
// CONTEXT API ---> GIVES SYORAGE AT GLOBAL LEVEL WHERE ALL FUNCTIONS AND SETFUNCTION IS DEFINED HERE SO IT CAN
//  DIRECTLY IMPORT FROM THAT GLOBALLY   ---> FOR SMALLER APPLICATION NOT FOR BIG ONE

const Child2 = ({count,setCount}) => {
    const { countValue } = useContext(CountContext)
  return (
    <div className='bg-blue-300 w-4/5 h-4/5 flex flex-col text-3xl justify-center items-center'>
        Child2
    <p>count : {count}</p>
    <p>Count-Value :{countValue} </p>
    </div>
  )
}

export default Child2