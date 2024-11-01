import React from 'react';
import projects from './data/projects.json';


const Project = () => {
  return (
    <div className="container projects my-3" id='project'>
      <h1 className='hweq'>PROJECTS</h1>
      <div className="row d-flex align-content-center gap-4">
        {projects.map((data) => (
          <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div className="card bg-dark project-card"
             data-aos="flip-right"
      data-aos-duration="1000"
            >
              <img src={data.imageSrc} className="card-img-top" alt={data.title} />
              <div className="card-body">
                <h5 className="card-title">{data.title || "nfd"}</h5>
                <p className="card-text">{data.description || "No Description Available"}</p>
                <a href={data.demo} className="btn btn-primary " target="_blank" rel="noopener noreferrer"> Demo</a>
                <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer"> Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
