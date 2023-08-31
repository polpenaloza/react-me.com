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
      {phrases[index % phrases.length]}
    </TextTransition>
  )
}
