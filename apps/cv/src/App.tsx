import { Loading } from '@workspace/ui/src/Loader/Loading'
import Scrollbars from '@workspace/ui/src/ScrollBars'
import { Suspense } from 'react'

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Scrollbars
        showMessage={false}
        onScroll={() => undefined}
        hasData={true}
        isError={false}
        isLoading={false}
      >
        hello
      </Scrollbars>
    </Suspense>
  )
}
