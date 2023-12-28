const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const PORT = process.env.PORT || 8080

// eslint-disable-next-line no-console
console.info('server url', SERVER_URL)

export function getDefaultPort() {
  return PORT
}

export function getBaseUrl(path = '') {
  const url = path ?? ''

  if (SERVER_URL) {
    return `https://${SERVER_URL}${url}`
  }

  // assume localhost
  return `http://localhost:${getDefaultPort()}${url}`
}
