import { PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../utils/recoil'
import { useControls } from 'leva'
import Constants from '../../utils/constants'
import { useEffect, useMemo, useRef } from 'react'

const CameraPerspective = () => {
  const camRef = useRef()

  const [cameraName] = useRecoilState(cameraNameAtom)
  const cameraProperties = useMemo(() => {
    switch (cameraName) {
      case Constants.CAMERA_NAMES.PERSPECTIVE1:
        return Constants.PERSPECTIVE_CAMERA_PROPERTIES.CAM1
      case Constants.CAMERA_NAMES.PERSPECTIVE2:
        return Constants.PERSPECTIVE_CAMERA_PROPERTIES.CAM2
      case Constants.CAMERA_NAMES.PERSPECTIVE3:
      default:
        return Constants.PERSPECTIVE_CAMERA_PROPERTIES.CAM3
    }
  }, [cameraName])
  
  useEffect(() => {
    console.log(cameraProperties)
    camRef.current.position.x = cameraProperties.position.x
    camRef.current.position.y = cameraProperties.position.y
    camRef.current.position.z = cameraProperties.position.z
    camRef.current.rotation.x = cameraProperties.rotation.x
    camRef.current.rotation.y = cameraProperties.rotation.y
    camRef.current.rotation.z = cameraProperties.rotation.z
  }, [cameraProperties])

  const { rotation, position, fov } = useControls(
    'Perspective Camera',
    {
      rotation: {
        value: cameraProperties.rotation,
        x: { max: Math.PI, min: -Math.PI, step: Math.PI * 0.01 },
        y: { max: Math.PI, min: -Math.PI * 0.5, step: Math.PI * 0.01 },
        z: { max: Math.PI, min: -Math.PI, step: Math.PI * 0.01 }
      },
      position: {
        value: cameraProperties.position,
        x: { max: 4, min: -2, step: 0.1 },
        y: { max: 4, min: -2, step: 0.1 },
        z: { max: 4, min: -2, step: 0.1 }
      },
      fov: { value: 50, min: 10, max: 120 }
    },
    { collapsed: true }
  )

  return (
    <PerspectiveCamera
      ref={camRef}
      rotation={[rotation.x, rotation.y, rotation.z]}
      position={[position.x, position.y, position.z]}
      fov={fov}
      near={0.1}
      far={2000}
      makeDefault={cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC}
    />
  )
}
export default CameraPerspective
