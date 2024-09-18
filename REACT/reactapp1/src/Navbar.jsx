import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-700 flex justify-between p-4 '>
        <div className='text-2xl'>Logo</div>
            <div className='flex gap-10 text-2xl'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                {/* <p>Home</p>
                <p>Login</p>
                <p>Signup</p> */}
            </div>
        </div>
  )
}

export default Navbar