'use client'

import { useCallback } from 'react'
import ReactParticles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

import { logger } from '@/core/logger'

import { defaultOptions } from './options'
import { parallaxOptions } from './parallax'

const log = logger('particles')

export function Particles({ config = 'default' }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      log(container)
    },
    []
  )

  let options: any = defaultOptions

  switch (config) {
    case 'parallax':
      options = parallaxOptions
      break
    default:
      options = defaultOptions
  }

  return (
    <ReactParticles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  )
}
