// import coreLog from '../logger'

// const log = coreLog.extend('core:crumbs')

interface iCrumb {
  path: string
  cb?(_crumb: string): string
}

export function crumbs({
  path,
  cb,
}: iCrumb): Array<{ url: string; name: string }> {
  const loc = path
    .split('?')[0]
    .split('/')
    .filter(Boolean)
    .map((crumb: string) => {
      const name = cb?.(crumb) || crumb

      return {
        url: crumb,
        name,
      }
    })

  // log('crumbs %o', loc)

  return loc
}
