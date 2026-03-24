import Particles, { initParticlesEngine } from "@tsparticles/react";

const configs = {
    particles: {
      number: {
        value: 400
      },
      color: {
        value: ["#ff0000aa", "#00ff00aa", "#0000ffaa", "#ffffffff"]
      },
      links: {
        enable: true,
        distance: 250,
        color: "random",
        opacity: 0.5,
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.25
      },
      size: {
        value: {
          min: 4,
          max: 6
        }
      },
      move: {
        enable: true,
        speed: 0.5
      }
    },
    background: {
      color: "#000000"
    },
    poisson: {
      enable: true
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "attract"
        }
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.01
        }
      }
    }
  };

  export default configs;

  