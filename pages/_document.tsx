import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {


  return (
    <Html lang="en">
      <Head />
      <body data-color={`COLOR-${Math.floor(Math.random() * 3)}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
