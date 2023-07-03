import { useEffect, useRef } from 'react'

export const usePrevCamera = (value) => {
  const prevCameraRef = useRef()
  useEffect(() => {
    prevCameraRef.current = value
  })
  return prevCameraRef.current
}
