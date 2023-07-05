import { OrthographicCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../utils/recoil'
import Constants from '../../utils/constants'

const CameraOrthographic = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)

  return (
    <OrthographicCamera
      position={[0, 1, 200]}
      zoom={70} // Based on screen size, fix zoom (4K needs like 150 or sth)
      near={1}
      far={2000}
      makeDefault={cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC}
    />
  )
}
export default CameraOrthographic
