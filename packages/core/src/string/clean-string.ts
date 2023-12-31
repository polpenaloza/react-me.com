export function cleanString(url: string) {
  return url
    .replace(/[^A-Za-z|0-9|\s|/]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase()
}
