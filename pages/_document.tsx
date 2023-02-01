import { Html, Head, Main, NextScript } from 'next/document'
import {useEffect, useState} from "react"
import dynamic from 'next/dynamic';

function Document() {
  const [color, setColor] = useState<number | undefined>(undefined)

  useEffect(()=> {
    setColor(Math.floor(Math.random() * 3))
  }, [])

  return (
    <Html lang="en">
      <Head />
      <body data-color={`COLOR-${color}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default dynamic(() => Promise.resolve(Document), {
  ssr: false,
});
