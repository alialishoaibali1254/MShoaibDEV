import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import "./assets/css/App.css"
import Education from './components/Education'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Foter from './components/Foter'
import Aos from 'aos'
import "aos/dist/aos.css"
import Top from './components/Top'
const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <Navbar/>
      <div className="container">
        <Home/>
        <Education/>
        <Skills/>
        <Project/>
        <Contact />
        <Foter/>
        <Top/>
      </div>
    </>
  )
}

export default App
