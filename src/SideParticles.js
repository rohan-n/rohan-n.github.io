import { useEffect, useState, memo } from 'react';
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const makeConfig = (isDark) => {
  const color = isDark ? "#00ff00" : "#8b0000";
  return {
    particles: {
      number: { value: 60 },
      color: { value: color },
      links: { enable: true, distance: 150, color, opacity: 0.5 },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 2, max: 4 } },
      move: { enable: true, speed: 0.5 },
    },
    background: { color: "transparent" },
    interactivity: {
      events: { onHover: { enable: true, mode: "attract" } },
      modes: { attract: { distance: 200, duration: 0.01 } },
    },
  };
};

const SideParticles = memo(() => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.getAttribute('data-theme') !== 'light'
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  if (!init) return null;

  const config = makeConfig(isDark);

  return (
    <>
      <div className="side-particles side-particles-left">
        <Particles key={`left-${isDark}`} id="particles-left" options={config} />
      </div>
      <div className="side-particles side-particles-right">
        <Particles key={`right-${isDark}`} id="particles-right" options={config} />
      </div>
    </>
  );
});

export default SideParticles;
