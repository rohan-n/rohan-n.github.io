import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import './styles.css';
// import BookListPage from './BookListPage';
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import configs from './Particles';

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
    <Particles
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={configs}
  />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/booklist" component={BookListPage} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;