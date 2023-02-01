import { Html, Head, Main, NextScript } from 'next/document'
import {useMemo, useState} from "react"

export default function Document() {
  const [color, setColor] = useState<number>()
  useMemo(()=> {
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
