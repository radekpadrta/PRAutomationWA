import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log("NEXT_PUBLIC_MESSAGE:", process.env.NEXT_PUBLIC_MESSAGE);
    setMessage(process.env.NEXT_PUBLIC_MESSAGE || 'Hello from Dummy NextJS App B!')
  }, [])

  return (
    <div>
      <h1>Dummy NextJS App B etst</h1>
      <p>{message}</p>
      <p>Environment variable: {process.env.NEXT_PUBLIC_MESSAGE}</p>
    </div>
  )
}
