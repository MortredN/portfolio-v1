import { PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '@/utils/recoil'
import { button, useControls } from 'leva'
import Constants from '@/utils/constants'
import { usePrevCamera } from '@/hooks/camera'
import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

const CameraPerspective = () => {
  const camRef = useRef()
  const camGroupRef = useRef()

  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const prevCamera = usePrevCamera(cameraName)

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
    if (
      cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
      prevCamera !== Constants.CAMERA_NAMES.ORTHOGRAPHIC
    ) {
      // Smooth out position and rotation transition
      gsap.to(camRef.current.position, {
        x: cameraProperties.position.x,
        y: cameraProperties.position.y,
        z: cameraProperties.position.z,
        ease: 'power2.inOut',
        duration: Constants.PERSPECTIVE_CAMERA_TRANSITION_TIME
      })
      gsap.to(camRef.current.rotation, {
        x: cameraProperties.rotation.x,
        y: cameraProperties.rotation.y,
        z: cameraProperties.rotation.z,
        ease: 'power2.inOut',
        duration: Constants.PERSPECTIVE_CAMERA_TRANSITION_TIME
      })
    } else {
      // Change position and rotation immediately
      camRef.current.position.x = cameraProperties.position.x
      camRef.current.position.y = cameraProperties.position.y
      camRef.current.position.z = cameraProperties.position.z
      camRef.current.rotation.x = cameraProperties.rotation.x
      camRef.current.rotation.y = cameraProperties.rotation.y
      camRef.current.rotation.z = cameraProperties.rotation.z
    }
  }, [cameraProperties])

  const switchCamButtons = useControls(
    'Switch Camera',
    {
      switchPerspective1: button(() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)),
      switchPerspective2: button(() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)),
      switchPerspective3: button(() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)),
      switchOrthographic: button(() => setCameraName(Constants.CAMERA_NAMES.ORTHOGRAPHIC))
    },
    { collapsed: false }
  )

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
    <group ref={camGroupRef}>
      <PerspectiveCamera
        ref={camRef}
        rotation={[rotation.x, rotation.y, rotation.z]}
        position={[position.x, position.y, position.z]}
        fov={fov}
        near={0.1}
        far={2000}
        makeDefault={cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC}
      />
    </group>
  )
}
export default CameraPerspective
