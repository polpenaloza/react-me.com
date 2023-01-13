import Head from 'next/head'

interface iSeo {
  description: string
  image: string
  siteTitle: string
  title: string
  twitter?: string
}

export const SEO = ({
  description,
  image,
  siteTitle,
  title,
  twitter,
}: iSeo) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='description' content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='theme-color' content='#000000' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='twitter:card' content='summary' />
      <meta property='twitter:creator' content={twitter} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:description' content={description} />
      <meta
        name='apple-mobile-web-app-title'
        content='polpenaloz.com - just showing off'
      />
      <meta
        name='application-name'
        content='polpenaloz.com - just showing off'
      />
    </Head>
  )
}

export default SEO
