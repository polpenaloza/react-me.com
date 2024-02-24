'use client'

import { LeftSidebar } from '@/components/LeftSidebar'

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='relative flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
      <div className='container m-auto flex h-full w-full overflow-hidden xl:max-w-[70vw]'>
        <LeftSidebar />
        {children}
      </div>
    </main>
  )
}
