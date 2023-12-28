import type { Movie } from '@prisma/client'

export type MovieMap = {
  [key: string]: Movie
}

export type { Movie }
