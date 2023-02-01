import { Html, Head, Main, NextScript } from 'next/document'
import { useState, useMemo } from "react"

export default function Document() {
  const [color, setColor] = useState<number | null>(null)

    useMemo(() => {
        setColor(Math.floor(Math.random() * 3))
    }, [])

  return (
    <Html lang="en">
      <Head />
      <body data-color={`COLOR-${color?.toString()}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
