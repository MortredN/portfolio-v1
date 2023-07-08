import { useRecoilState } from 'recoil'
import { cameraNameSwapAtom } from '../../utils/recoil'
import { usePrevCamera } from '../../hooks/camera'
import Constants from '../../utils/constants'
import { useEffect, useState } from 'react'

const OverlayFilling = () => {
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const prevCamera = usePrevCamera(cameraNameSwap)

  const [overlayFillingClass, setOverlayFillingClass] = useState(`hidden`)

  useEffect(() => {
    if (
      cameraNameSwap === Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
      prevCamera &&
      prevCamera !== Constants.CAMERA_NAMES.ORTHOGRAPHIC
    ) {
      setOverlayFillingClass(``)
      setTimeout(() => setOverlayFillingClass(`hidden`), (Constants.CAMERA_SWAP_LOADING_TIME + 1) * 1000)
    }
  }, [cameraNameSwap])

  return (
    <div
      className={`box-filling fixed top-0 left-0 w-screen h-screen overflow-hidden z-50 ${overlayFillingClass}`}
    />
  )
}
export default OverlayFilling
