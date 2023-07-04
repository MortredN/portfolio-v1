import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cameraNameSwapAtom } from '../../utils/recoil'
import { usePrevCamera } from '../../hooks/camera'
import Constants from '../../utils/constants'

const OverlayMug = () => {
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const prevCamera = usePrevCamera(cameraNameSwap)

  const [overlayMugClass, setOverlayMugClass] = useState(`hidden opacity-1`)

  useEffect(() => {
    if (
      cameraNameSwap !== Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
      prevCamera &&
      prevCamera === Constants.CAMERA_NAMES.ORTHOGRAPHIC
    ) {
      setTimeout(
        () => setOverlayMugClass(`opacity-1`),
        (Constants.CAMERA_SWAP_LOADING_TIME - 0.5) * 1000
      )
      setTimeout(() => setOverlayMugClass(`opacity-0`), Constants.CAMERA_SWAP_LOADING_TIME * 1000)
      setTimeout(
        () => setOverlayMugClass(`hidden opacity-1`),
        (Constants.CAMERA_SWAP_LOADING_TIME + 0.5) * 1000
      )
    }
  }, [cameraNameSwap])

  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className={`fixed top-0 left-0 w-screen h-screen bg-coffee-1 transition duration-500 z-50 ${overlayMugClass}`}
    />
  )
}

export default OverlayMug
