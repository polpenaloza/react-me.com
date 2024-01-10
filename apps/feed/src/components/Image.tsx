import NextImage from 'next/image'
import { type ImgHTMLAttributes } from 'react'

interface iImage extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string
  fit?: boolean
  height?: number
  placeholder?: 'blur' | 'empty'
  priority?: boolean
  src: string
  width?: number
}

export function Image({
  fit = false,
  priority,
  height = 100,
  width = 100,
  ...otherProps
}: iImage) {
  const imgProps = fit
    ? {
        fill: fit,
      }
    : {
        height,
        width,
      }

  /** @render */
  return (
    <NextImage
      placeholder={'empty'}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      quality={90}
      sizes='(max-width: 4096px) 100vw, (max-width: 2048px) 50vw, 33vw'
      {...imgProps}
      {...otherProps}
    />
  )
}

export default Image
