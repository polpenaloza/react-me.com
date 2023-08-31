export const defaultOptions = {
  detectRetina: false,
  fpsLimit: 60,
  background: {
    opacity: 1,
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          enable: false,
          force: 4,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
        factor: 20,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },
  particles: {
    color: {
      value: '#000',
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    lineLinked: {
      blink: false,
      color: 'random',
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: 'triangle',
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 1,
    },
  },
}
