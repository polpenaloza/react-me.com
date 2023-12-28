interface tInfo {
  url?: string
  title?: string
  text?: string
  hashtags?: string[]
}

export default class Simplesharer {
  protected socialSite: string
  protected url: string
  protected target: string
  protected hashtags: string[]
  protected text: string
  protected title: string

  constructor(socialSite: string, url: string, target: string) {
    this.socialSite = socialSite
    this.target = target || '_blank'
    this.hashtags = []
    this.text = ''
    this.title = ''
    if (typeof window !== 'undefined') {
      this.url = url || window.location.href
    }
  }

  verifyUrl() {
    if (!this.url) {
      console.error('URL is required')
      return
    }
  }
  facebook() {
    this.verifyUrl()
    this.shareWindow(`https://www.facebook.com/sharer.php?u=${this.url}`)
  }
  reddit() {
    this.verifyUrl()
    this.shareWindow(
      `https://reddit.com/submit?url=${this.url}&title=${this.title}`
    )
  }
  whatsapp() {
    this.verifyUrl()
    this.shareWindow(`whatsapp://send?text=${this.url}`)
  }
  twitter() {
    this.verifyUrl()
    this.shareWindow(
      `https://twitter.com/intent/tweet?url=${
        this.url
      }&text=${this.text.substring(0, 100)}&hashtags=${this.hashtags.join()}`
    )
  }
  linkedin() {
    this.verifyUrl()
    this.shareWindow(
      `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`
    )
  }

  copy() {
    this.verifyUrl()
    const elem = document.createElement('textarea')

    elem.value = this.url
    document.body.appendChild(elem)
    elem.select()
    document.execCommand('copy')
    document.body.removeChild(elem)
  }

  shareWindow(url: string) {
    if (typeof window !== 'undefined') {
      const y = window.top
        ? window.top.outerHeight / 2 + window.top.screenY - 500 / 2
        : 100
      const x = window.top
        ? window.top.outerWidth / 2 + window.top.screenX - 500 / 2
        : 100

      window.open(
        url,
        this.target,
        this.target === '_blank'
          ? `location,status,scrollbars,resizable,width=500,height=500,left=${x},top=${y}`
          : undefined
      )
    }
  }
}

function verify(info: tInfo) {
  const temp: { [key: string]: string | string[] } = {}

  if (typeof window !== 'undefined') {
    temp.url = info.url || window.location.href
  }
  if (!temp.url) {
    throw new Error('URL is required')
  }
  return temp
}

export function facebook(info = {} as tInfo) {
  const temp = verify(info)

  shareWindow(`https://www.facebook.com/sharer.php?u=${temp?.url}`)
}

export function linkedin(info = {} as tInfo) {
  const temp = verify(info)

  shareWindow(
    `https://www.linkedin.com/sharing/share-offsite/?url=${temp?.url}`
  )
}

export function whatsapp(info = {} as tInfo) {
  const temp = verify(info)

  shareWindow(`whatsapp://send?text=${temp?.url}`)
}

export function reddit(info = {} as tInfo) {
  const temp = verify(info)

  temp.title = info.title || ''
  shareWindow(`https://reddit.com/submit?url=${temp.url}&title=${temp.title}`)
}

export function twitter(info = {} as tInfo) {
  const temp = verify(info)

  temp.text = info.text || ''
  temp.hashtags = info.hashtags || []
  shareWindow(
    `https://twitter.com/intent/tweet?url=${
      temp.url
    }&text=${temp.text.substring(0, 256)}&hashtags=${temp.hashtags.join()}`
  )
}

export function copy(url: string) {
  if (typeof window !== 'undefined') {
    url = url || window.location.href
    try {
      navigator.clipboard.writeText(url)
      const elem = document.createElement('textarea')

      elem.value = url
      document.body.appendChild(elem)
      elem.select()
      document.execCommand('copy')
      document.body.removeChild(elem)
    } catch (e) {
      navigator.clipboard.writeText(url)
    }
  }
}

function shareWindow(url: string) {
  if (typeof window !== 'undefined') {
    const y = window.top
      ? window.top.outerHeight / 2 + window.top.screenY - 500 / 2
      : 100
    const x = window.top
      ? window.top.outerWidth / 2 + window.top.screenX - 500 / 2
      : 100

    window.open(
      url,
      '_blank',
      `location,status,scrollbars,resizable,width=500,height=500,left=${x},top=${y}`
    )
  }
}
