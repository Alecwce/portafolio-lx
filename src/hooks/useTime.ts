import { useState, useEffect } from 'react'

export const useTime = () => {
  const getPeruTime = () => {
    return new Date().toLocaleTimeString('es-PE', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'America/Lima'
    })
  }

  const [time, setTime] = useState(getPeruTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getPeruTime())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return time
}
