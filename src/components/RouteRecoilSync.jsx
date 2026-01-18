import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'

const RouteRecoilSync = () => {
  const location = useLocation()
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  const changeCameraName = (name) => {
    if (name === cameraName) {
      return
    }
    // Swap between different camera types -> need delay
    // There is only one position for the orthographic camera
    if (
      cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC ||
      name === Constants.CAMERA_NAMES.ORTHOGRAPHIC
    ) {
      setCameraNameSwap(name)
    } else {
      setCameraName(name)
      setCameraNameSwap(name)
    }
    document.body.style.cursor = 'default'
  }

  useEffect(() => {
    const path = location.pathname
    switch (path) {
      case '/about':
        changeCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)
        break
      case '/works':
        changeCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)
        break
      case '/contact':
        changeCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)
        break
      case '/':
      default:
        changeCameraName(Constants.CAMERA_NAMES.ORTHOGRAPHIC)
        break
    }
  }, [location.pathname])

  return null
}
export default RouteRecoilSync
