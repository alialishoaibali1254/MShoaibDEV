import React, { useEffect, useRef, useSyncExternalStore } from 'react'
import hero from './data/hero.json'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
    const options ={
      strings:["My Name is Shoaib", "I'm frontend  developer", "I'm backend developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedRef.current , options)
    return() =>{
    typed.destroy()
    }
  },[]) 
  return (
    <>
      <div className="container home" id='home'>
        <div className="left"
         data-aos="fade-up-right"
      data-aos-duration="1000"
        >
   <h1>Welcome To My profile</h1>
   <h1 ref={typedRef}></h1>

        </div>
        <div className="right">
          <div className="image"
           data-aos="fade-up-left"
      data-aos-duration="1000"
          >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
