import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <div className="container-fluid my-5" id="skills">
      {/* Section Heading */}
      <h1 className="text-center display-4 font-weight-bold mb-5 text-light">SKILLS</h1>

      <div className="row">
        {skills.map((data) => (
          <div
            className="col-12 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
            key={data.id}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="item text-center skill-card p-4 rounded shadow-lg">
              {/* Skill Image */}
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.title}
                className="img-fluid mb-3 skill-image"
                style={{
                  maxWidth: '100px',  // Set image size
                  height: '100px',
                }}
              />
              {/* Skill Title */}
              <h3 className="font-weight-bold">{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
