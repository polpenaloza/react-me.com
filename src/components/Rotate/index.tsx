import { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'

export function RotateText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 5000)

    return () => clearTimeout(intervalId)
  }, [])

  return (
    <TextTransition springConfig={presets.wobbly}>
      <div className='w-8 overflow-hidden text-ellipsis whitespace-nowrap text-xs sm:w-full'>
        {phrases[index % phrases.length]}
      </div>
    </TextTransition>
  )
}
