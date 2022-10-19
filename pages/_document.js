import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en-US'>
      <Head>
        <meta name='description' content='Strong password generator' />
        <link rel='icon' href='/favicon-32x32.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,700;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
