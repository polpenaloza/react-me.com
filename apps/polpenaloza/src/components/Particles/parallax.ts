export const parallaxOptions = {
  autoPlay: true,
  background: {
    opacity: 1,
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: '#fff',
      },
      opacity: 1,
    },
    enable: false,
  },
  defaultThemes: {},
  delay: 0,
  detectRetina: true,
  duration: 0,
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onDiv: {
        enable: false,
        mode: [],
        selectors: [],
        type: 'circle',
      },
      onHover: {
        enable: true,
        mode: 'grab',
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 300,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        divs: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 100,
          maxSpeed: 50,
          selectors: [],
          speed: 1,
        },
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 100,
        maxSpeed: 50,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      animation: {
        h: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          decay: 0,
          delay: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
      value: '#f9a8d4',
    },
    destroy: {
      bounds: {},
      mode: 'none',
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        particles: {},
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            max: 9,
            min: 4,
          },
        },
        sizeOffset: true,
      },
    },
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        sync: false,
        value: 0,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        sync: false,
        value: 0,
      },
    },
    links: {
      blink: false,
      color: '#ffffff',
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: '#000',
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      warp: false,
      width: 1,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      center: {
        mode: 'percent',
        radius: 0,
        x: 50,
        y: 50,
      },
      decay: 0,
      direction: 'none',
      distance: {},
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      outModes: {
        bottom: 'out',
        default: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        fill: {},
        length: 10,
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        area: 800,
        enable: true,
        height: 1080,
        width: 1920,
      },
      limit: 0,
      value: 100,
    },
    opacity: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        destroy: 'none',
        enable: true,
        minimumValue: 0.1,
        mode: 'auto',
        speed: 3,
        startValue: 'random',
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: 0.5,
    },
    orbit: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      distance: 1,
      duration: 1,
      enabled: false,
      factor: 1,
      random: {
        enable: false,
        minimumValue: 0,
      },
      speed: 1,
      value: 0,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: 'vertical',
      speed: 25,
    },
    rotate: {
      animation: {
        decay: 0,
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
    },
    shadow: {
      blur: 0,
      color: {
        value: '#000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: 'circle',
    },
    size: {
      animation: {
        count: 0,
        decay: 0,
        delay: 0,
        destroy: 'none',
        enable: true,
        minimumValue: 0.1,
        mode: 'auto',
        speed: 20,
        startValue: 'random',
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        max: 3,
        min: 0.1,
      },
    },
    stroke: {
      width: 0,
    },
    tilt: {
      animation: {
        decay: 0,
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: 'clockwise',
      enable: false,
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    zIndex: {
      opacityRate: 1,
      random: {
        enable: false,
        minimumValue: 0,
      },
      sizeRate: 1,
      value: 0,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
}
