import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="landing-wrapper">
      {/* Hero Section with Welcome Animation */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className={`welcome-text ${showContent ? 'animate-in' : ''}`}>
            Welcome to<br />Rohan's Website
          </h1>
          <p className={`scroll-hint ${showContent ? 'animate-in' : ''}`}>Scroll to explore</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content">
        <nav className="nav">
          <a className="nav-name" href="#home">Rohan Nagalkar</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
          </ul>
        </nav>

        {/* Hero/Intro Section */}
        <section className="hero">
          <div className="hero-with-photo">
            <div className="hero-text">
              <p className="hero-eyebrow">San Francisco, CA</p>
              <h2>Fintech builder.<br /><em>Consumer finance,</em><br />done right.</h2>
              <p className="hero-body">
                I work at the intersection of engineering and consumer finance — most recently at
                <a href="https://www.affirm.com" target="_blank" rel="noopener noreferrer"> Affirm</a> and
                <a href="https://x1card.com" target="_blank" rel="noopener noreferrer"> X1</a> (acquired by
                <a href="https://robinhood.com" target="_blank" rel="noopener noreferrer"> Robinhood</a>).
                I care about making financial products fairer and simpler for real people.
              </p>
            </div>
            <div className="hero-photo">
              <img src="/rohan-photo.jpg" alt="Rohan Nagalkar" />
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* Links Section */}
        <div className="links-section">
          <p className="links-label">Find me</p>
          <div className="links-grid">
            <a className="link-pill" href="https://github.com/rohan-n" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
            <a className="link-pill" href="https://linkedin.com/in/rohannagalkar" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a className="link-pill" href="https://x.com/rohan_gpme" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X / Twitter
            </a>
            <a className="link-pill" href="mailto:rohan.nagalkar13@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 7 10-7" /></svg>
              Email
            </a>
            <a className="link-pill" href="https://www.goodreads.com/user/show/177940541-rohan-n" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v10H6.5A2.5 2.5 0 0 1 4 9.5v-5A2.5 2.5 0 0 1 6.5 2z" /></svg>
              Goodreads
            </a>
          </div>
        </div>

        {/* Currently Section */}
        <div className="currently" id="about">
          <p className="currently-label">Currently</p>
          <div className="currently-items">
            <div className="currently-item">
              <span className="c-tag">Building</span>
              <span className="c-text">This website and exploring the intersection of frontend and AI.</span>
            </div>
            <div className="currently-item">
              <span className="c-tag">Role</span>
              <span className="c-text">Software engineer focused on backend infrastructure and fintech systems.</span>
            </div>
            <div className="currently-item">
              <span className="c-tag">Background</span>
              <span className="c-text">
                Started my career at <a href="https://www.affirm.com" target="_blank" rel="noopener noreferrer">Affirm</a> on the Trust &amp; Safety team building fraud detection systems. Then joined the <a href="https://x1card.com" target="_blank" rel="noopener noreferrer">X1</a> credit card team to understand consumer lending (acquired by <a href="https://robinhood.com" target="_blank" rel="noopener noreferrer">Robinhood</a>).
              </span>
            </div>
            <div className="currently-item">
              <span className="c-tag">Community</span>
              <span className="c-text">Volunteer mentor with <a href="https://moneythink.org/" target="_blank" rel="noopener noreferrer">Moneythink</a>, teaching financial literacy to high school students.</span>
            </div>
            <div className="currently-item">
              <span className="c-tag">Hobbies</span>
              <span className="c-text">Reading, learning new things, playing video games, watching movies, and eating good food with great friends.</span>
            </div>
            <div className="currently-item">
              <span className="c-tag">Based in</span>
              <span className="c-text">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2026 Rohan Nagalkar
      </footer>
    </div>
  );
};

export default LandingPage;
