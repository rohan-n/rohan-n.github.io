import Particles, { initParticlesEngine } from "@tsparticles/react";

const configs = {
    particles: {
      number: {
        value: 100
      },
      color: {
        value: "#e41212aa"
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
    }
  };

  export default configs;

  