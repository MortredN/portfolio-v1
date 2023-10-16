import { useEffect, useRef, useState } from 'react'
import Hammer from 'hammerjs'

const MobileSwipe = ({ children }) => {
  const containerRef = useRef()
  const [deltaX, setDeltaX] = useState(0)

  useEffect(() => {
    const handleSwipe = (event) => {
      if (event.direction === Hammer.DIRECTION_LEFT || event.direction === Hammer.DIRECTION_RIGHT) {
        setDeltaX(event.deltaX)
      }
    }

    const hammer = new Hammer(containerRef.current)
    hammer.on('swipe', handleSwipe)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      {children(deltaX)}
    </div>
  )
}
export default MobileSwipe
