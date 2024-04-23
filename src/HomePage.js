import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const HomePage = () => {
  return (
    <div className="main-container center">
      <div className="name center-inline-text">
        Rohan Nagalkar
      </div>
      <div className="social-icons center-inline-text" style={{ marginTop: '50px' }}>
        <a href="https://github.com/rohan-n"><i className="fab fa-github-square fa-3x fa-fw"></i></a>
        <a href="https://www.linkedin.com/in/rohannagalkar/"><i className="fab fa-linkedin fa-3x fa-fw"></i></a>
        <a href="https://twitter.com/rohranger"><i className="fab fa-x-twitter fa-3x fa-fw" ></i></a>
        <a href="mailto:rohan.nagalkar13@gmail.com"><i className="fa fa-envelope fa-3x fa-fw"></i></a>
      </div>
    </div>
  );
}

export default HomePage;
