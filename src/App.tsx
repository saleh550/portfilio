import { useEffect } from 'react'
import './App.css'
import Sections from './components/sections/Sections'
import Navbar from './components/header/ResponsiveNavbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
      <Sections />
    </>
  )
}

export default App
