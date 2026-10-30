import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function RotateText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='w-24 overflow-hidden text-ellipsis whitespace-nowrap text-xs sm:w-56 md:w-full'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          initial={{ opacity: 0, y: '100%' }}
          key={index}
          transition={{ damping: 20, stiffness: 300, type: 'spring' }}
        >
          {phrases[index % phrases.length]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
