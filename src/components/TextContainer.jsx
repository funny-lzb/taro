import { useState, useEffect } from 'react'

export default function TextContainer({ text, maxChars }) {
  const [truncatedText, setTruncatedText] = useState('')

  useEffect(() => {
    if (text.length > maxChars) {
      setTruncatedText(text.substring(0, maxChars) + '...')
    } else {
      setTruncatedText(text)
    }
  }, [text, maxChars])

  return <div>{truncatedText}</div>
}
