import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const HomePage = () => {
  return (
    <div className="main-container center">
      <div className="name center-inline-text">
        Rohan Nagalkar
      </div>
      <div>
        <i class="fab fa-github-square fa-3x" style={{ color: 'white' }}></i>
        <i class="fab fa-linkedin fa-3x" style={{ color: 'white' }}></i>
        <i class="fab fa-x-twitter fa-3x" style={{ color: 'white' }}></i>
        <i class="fab fa-mailbox fa-3x" style={{ color: 'white' }}></i>
      </div>
    </div>
  );
}

export default HomePage;
