import { PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraOrthoAtom } from '../../utils/recoil'
import { useControls } from 'leva'

const PERSPECTIVE_CAMERA_PROPERTIES = {
  camera1: {
    position: { x: 0.7, y: 1.8, z: 2.6 },
    rotation: { x: Math.PI * -0.16, y: Math.PI * 0.38, z: Math.PI * 0.15 }
  }
}

const CameraPerspective = () => {
  const [ortho] = useRecoilState(cameraOrthoAtom)

  const { rotation, position, fov } = useControls(
    'Perspective Camera',
    {
      rotation: {
        value: PERSPECTIVE_CAMERA_PROPERTIES.camera1.rotation,
        x: { max: Math.PI, min: -Math.PI, step: Math.PI * 0.01 },
        y: { max: Math.PI, min: -Math.PI * 0.5, step: Math.PI * 0.01 },
        z: { max: Math.PI, min: -Math.PI, step: Math.PI * 0.01 }
      },
      position: {
        value: PERSPECTIVE_CAMERA_PROPERTIES.camera1.position,
        x: { max: 4, min: -2, step: 0.1 },
        y: { max: 4, min: 0, step: 0.1 },
        z: { max: 4, min: -2, step: 0.1 }
      },
      fov: { value: 50, min: 10, max: 120 }
    },
    { collapsed: true }
  )

  return (
    <PerspectiveCamera
      rotation={[rotation.x, rotation.y, rotation.z]}
      position={[position.x, position.y, position.z]}
      fov={fov}
      near={1}
      far={2000}
      makeDefault={!ortho}
    />
  )
}
export default CameraPerspective
