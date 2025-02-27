import React, { useEffect, useRef } from 'react';
import hero from './data/hero.json';
import Typed from 'typed.js';
 

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["My Name is Shoaib", "I'm a Frontend Developer", "I'm a Backend Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid  py-5" id="home">
      <div className="row  align-items-center">
        {/* Left Section: Text */}
        <div className="col-12 col-md-6 text-center text-md-left" id='typescript' data-aos="fade-up-right" data-aos-duration="1000">
          <h1 className=" mb-4 text-light">Welcome To My Profile</h1>
          <h1 className="h3 text-light" ref={typedRef}></h1>
        </div>

        {/* Right Section: Image */}
        <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="image">
          <img
  src={`/assets/${hero.imgSrc}`}
  alt="hero"
  className="img-fluid  superman-img"
  style={{
    width: '250px',  // Set the desired size
    height: '250px',  // Equal height and width for a circle
    borderRadius: '50%',  // Circular shape
      // Ensures the image fills the circle
  }}
/>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
