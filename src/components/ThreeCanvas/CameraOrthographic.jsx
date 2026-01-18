import { OrthographicCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'
import { useWindowSize } from '@/hooks/screenSize'
import { useMemo } from 'react'

const CameraOrthographic = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const windowSize = useWindowSize()

  const zoomValue = useMemo(() => {
    if (windowSize?.width && windowSize?.height) {
      return windowSize.width < 1024 && windowSize.width < windowSize.height
        ? (windowSize.width / 1920) * 140
        : (windowSize.width / 1920) * 70
    } else return 70
  }, [windowSize])

  return (
    <OrthographicCamera
      position={[0, 1, 200]}
      zoom={zoomValue} // Based on screen size, fix zoom (4K needs like 120 or sth)
      near={1}
      far={2000}
      makeDefault={cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC}
    />
  )
}
export default CameraOrthographic
