import { router } from '~/server/trpc'

import { movie } from './movie'
import { movies } from './movies'
import { moviesAutocomplete } from './movies.autocomplete'

export const appRouter = router({
  movie,
  movies,
  moviesAutocomplete,
})

// export type definition of API
export type AppRouter = typeof appRouter
