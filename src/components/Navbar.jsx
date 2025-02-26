import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <a className="navbar-brand text-light fs-3" href="#home">SHOAIB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-item nav-link text-light fs-5" href="#home">Home</a>
              <a className="nav-item nav-link text-light fs-5" href="#education">Education</a>
              <a className="nav-item nav-link text-light fs-5" href="#skills">Skills</a>
              <a className="nav-item nav-link text-light fs-5"  href="#project">Project</a>
              <a className="nav-item nav-link text-light fs-5 " href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
