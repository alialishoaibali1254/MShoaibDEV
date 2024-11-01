import React from 'react'
import edu from './data/edu.json'
const Education = () => {
  return (
    <div className='education' id='education'>
      <h1 className='heidins'>EDUCATION</h1>
      <div className="main-edu">
      <div className="leftedu"
      >
      <div className="edu-1"
       data-aos="fade-up-right"
      data-aos-duration="1000"
      >
        <h1>Matric</h1>
        <h2>2020-2022</h2>
        <h2>Islamia High School</h2>
        </div>
        <div className="edu-2"
         data-aos="fade-up-right"
      data-aos-duration="1000"
        >
        <h1>Fsc(pre-med)</h1>
        <h2>2022-2024</h2>
        <h2>Govt Graduate College</h2>
        </div>
        </div>
        <div className="right-edu-im"
         data-aos="fade-up-left"
      data-aos-duration="1000"
        >
        <img src={`/assets/${edu.imgSrc}`} alt="edu" 
         data-aos="fade-up-left"
      data-aos-duration="1000"
        />
        </div>
        </div>
    </div>
  )
}

export default Education
