import { OrthographicCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraOrthoAtom } from '../../utils/recoil'

const CameraOrthographic = () => {
  const [ortho] = useRecoilState(cameraOrthoAtom)

  return (
    <OrthographicCamera position={[0, 0, 200]} zoom={50} near={1} far={2000} makeDefault={ortho} />
  )
}
export default CameraOrthographic
