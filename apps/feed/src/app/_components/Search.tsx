import type { InputHTMLAttributes, RefObject } from 'react'

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement>
  searchId: string
  placeholder?: string
  searchRef?: RefObject<HTMLInputElement>
}

export function Search({
  searchId,
  searchRef,
  placeholder = 'Search...',
  ...otherProps
}: SearchProps) {
  return (
    <div className='relative w-full'>
      <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
        <svg
          className='h-4 w-4 text-gray-500 dark:text-gray-400'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
      </div>
      <input
        {...otherProps}
        type='search'
        id={searchId}
        ref={searchRef}
        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
        placeholder={placeholder}
        autoComplete='off'
        autoCapitalize='off'
        required
      />
      <button
        type='submit'
        className='absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
      >
        Search
      </button>
    </div>
  )
}
