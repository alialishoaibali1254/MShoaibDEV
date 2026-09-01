import React from 'react'
import edu from './data/edu.json'

const Education = () => {
  return (
    <div className="container-fluid education" id="education">
      <h1 className="heidins text-light text-center">EDUCATION</h1>
      <div className="row align-items-center">
        {/* Left section - Education details */}
        <div className="col-12 col-md-6" data-aos="fade-up-right" data-aos-duration="1000">
          <div className="edu-1">
            <h1>Intermediate </h1>
            <h2>2022 – 2024</h2>
            <p className="mt-3 text-light">
              Completed Intermediate with a strong foundation in analytical thinking, 
              problem-solving, and continuous learning — skills I now apply daily in 
              building clean, efficient, and user-focused web applications.
            </p>
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
