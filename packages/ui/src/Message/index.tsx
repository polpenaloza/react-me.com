import clsx from 'clsx'

export function Message({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div
      className={clsx(['flex w-full items-center justify-center', className])}
    >
      <h1 className='my-10 text-2xl'>{text}</h1>
    </div>
  )
}
