
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <provider store = {store} >
    <Navbar />
    <Dashboard />
    </provider>
    </>
  )
}

export default App


