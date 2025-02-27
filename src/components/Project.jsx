import React from 'react';
import projects from './data/projects.json';

const Project = () => {
  return (
    <div className="container-fluid my-5" id="project">
      {/* Section Heading */}
      <h1 className="text-center display-4 font-weight-bold mb-5 text-light">PROJECTS</h1>
      
      <div className="row d-flex justify-content-center gap-4">
        {projects.map((data) => (
          <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div
              className="card project-card shadow-lg  rounded"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              {/* Project Image */}
              <img
                src={data.imageSrc}
                className="card-img-top project-img"
                alt={data.title}
              />
              
              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold text-light">{data.title || 'No Title'}</h5>
                <p className="card-text text-light">{data.description || 'No Description Available'}</p>
                <a
                  href={data.demo}
                  className="btn btn-outline-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
