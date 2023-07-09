import { useEffect, useState } from 'react'

export const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = window.addEventListener('mousemove', (e) => {
      setMouse({ x: e.pageX, y: e.pageY })
    })

    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return mouse
}
