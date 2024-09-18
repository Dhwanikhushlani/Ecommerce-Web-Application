// ALWAYS KEEP FILE NAME AND FUNCTION NAME SAME
// COMPONENT CREATED NAME AS --> HOME
// THIS COMPONENT CAN BE USED IN APP.JSX DONT USE IN MAIN.JSX OR INDEX.HTML --> DONT GO BELOW APP.JSX

// function Home(){

    // ELEENT SHOULD BE RETURN IN A SINGLE PARENT IN RETURN BLOCK AS H1 AND H2 CANNOT BE DEFINED SEPERRATELY 
    // IT SHOULD BE BOTH IN A SINGLE DIV THEN IT DONT GIVE ERROR
//     return(
//         <div>
//         <h1>Home</h1>
//         <h2>About</h2>
//         </div>
//     )
// }

// export default Home;
import React from 'react'

function Home() {
  return (
    <div className='text-2xl text-blue-800 text-right'>Home</div>
  )
}

export default Home