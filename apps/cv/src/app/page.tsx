'use client'

import { Loading } from '@workspace/ui/src/Loader/Loading'
import Scrollbars from '@workspace/ui/src/ScrollBars'
import { Suspense } from 'react'

export default function Page() {
  function handleScroll() {
    // console.log('scroll')
  }

  return (
    <Suspense fallback={<Loading />}>
      <Scrollbars
        showMessage={false}
        onScroll={handleScroll}
        hasData={true}
        isError={false}
        isLoading={false}
      >
        hello
      </Scrollbars>
    </Suspense>
  )
}
