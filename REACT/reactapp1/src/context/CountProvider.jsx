import React, { createContext, useState } from 'react'

// 1. CREATE CONTEXT AS :---> BEHAVES AS OBJECT TYPE IT PROVIDES CONTEXT COMPONENT AS USING "CountContext.Provider"

export const CountContext = createContext();


const CountProvider = ({children}) => {
    const [countValue , setCountValue] = useState(0);
  return (
    // GLOBAL STORE AS CONTEXT API GLOBL STORE 
    <CountContext.Provider value={{countValue , setCountValue}}>
        {children}
    </CountContext.Provider>
  )
}

export default CountProvider