import React from 'react'
import edu from './data/edu.json'

const Education = () => {
  return (
    <div className="container-fluid education" id="education">
      <h1 className="heidins text-light text-center">EDUCATION</h1>
      <div className="row align-items-center">
        {/* Left section - Education details */}
        <div className="col-12 col-md-6 " data-aos="fade-up-right" data-aos-duration="1000">
          <div className="edu-1">
            <h1>Matric</h1>
            <h2>2020-2022</h2>
            <h2>Islamia High School</h2>
          </div>
          <div className="edu-2 mt-4" data-aos="fade-up-right" data-aos-duration="1000">
            <h1>Fsc (pre-med)</h1>
            <h2>2022-2024</h2>
            <h2>Govt Graduate College</h2>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="col-12 col-md-6 text-center text-md-right" data-aos="fade-up-left" data-aos-duration="1000">
          <img
            src={`/assets/${edu.imgSrc}`}
            alt="education"
            className="img-fluid"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  )
}

export default Education
