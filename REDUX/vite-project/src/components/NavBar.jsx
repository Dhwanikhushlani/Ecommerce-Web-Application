// ? FRONTEND OF NODE IN IT CREATE NEW REACT VITE AND THEN DO IT IN THAT
// ? 16 SEPTEMBER
// ? COPY THIS COPONENTS FOLDERR IN DAY-33-FRONTEND IN NODEPROJECT FOLDER BY CREATING FOLDER CONTAINING REACT SERVER


import React from 'react'

// todo ---> SEARCH ICONS IN CHROME BY REACT ICONS AND TYPE THERE ICON NAME AS PROFILE AND YOU WILL GET SOURE CODE
import {CgProfile} from "react-icons/cg"

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-slate-200'>
        <div className='text-2xl '>
            Logo
        </div>
        <div>
            <input type="text" placeholder='Search...' />
        </div>
        <div>
            <CgProfile />
        </div>
    </div>
  )
}

export default NavBar