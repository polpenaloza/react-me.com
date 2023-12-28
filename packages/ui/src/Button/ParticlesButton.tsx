import { iButtonProps } from '.'
import { IconButton } from './IconButton'

interface iParticlesButtonProps extends iButtonProps {
  isDarkMode?: boolean
}

export function ParticlesButton({
  children,
  isDarkMode,
  onClick,
  ...otherProps
}: iParticlesButtonProps) {
  function pop(e: {
    clientX: number
    clientY: number
    target: {
      getBoundingClientRect: () => {
        left: number
        width: number
        top: number
        height: number
      }
    }
  }) {
    const amount = 30

    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect()
      const x = bbox.left + bbox.width / 2
      const y = bbox.top + bbox.height / 2

      for (let i = 0; i < amount; i++) {
        // We call the function createParticle 30 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y)
      }
    } else {
      for (let i = 0; i < amount; i++) {
        createParticle(e.clientX, e.clientY + window.scrollY)
      }
    }
  }

  function createParticle(x: number, y: number) {
    const particle = document.createElement('particle')

    document.body.appendChild(particle)
    let width: string | number = Math.floor(Math.random() * 30 + 8)
    let height: string | number = width
    const destinationX = (Math.random() - 0.5) * 300
    const destinationY = (Math.random() - 0.5) * 300
    const rotation = Math.random() * 520
    const delay = Math.random() * 200
    const color = isDarkMode ? 'pink' : 'purple'

    particle.style.boxShadow = `0 0 ${Math.floor(
      Math.random() * 10 + 10
    )}px ${color}`
    particle.style.background = color
    particle.style.borderRadius = '50%'
    width = height = Math.random() * 5 + 4

    particle.style.width = `${width}px`
    particle.style.height = `${height}px`
    particle.style.position = 'fixed'
    particle.style.top = '0px'
    particle.style.zIndex = '99999999'

    const animation = particle.animate(
      [
        {
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${
            y + destinationY
          }px) rotate(${rotation}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 1000 + 1500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay,
      }
    )

    animation.onfinish = removeParticle
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function removeParticle(e: any) {
    e.srcElement.effect.target.remove()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(e: any) {
    pop(e)
    onClick?.(e)
  }

  return (
    <IconButton {...otherProps} onClick={(e) => handleClick(e)}>
      {children}
    </IconButton>
  )
}
