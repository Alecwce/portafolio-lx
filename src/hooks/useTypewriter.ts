import { useState, useEffect } from 'react'

export const useTypewriter = (text: string, speed: number = 50) => {
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedText(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return typedText
}
