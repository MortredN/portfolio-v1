import CoffeeShop from './CoffeeShop'
import Lighting from './Lighting'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom, openMediaPlayerAtom } from '../../utils/recoil'
import CameraPerspective from './CameraPerspective'
import Constants from '../../utils/constants'
import { MathUtils } from 'three'
import LoadingCoffeeMug from './LoadingCoffeeMug'
import { useMouse } from '../../hooks/mouse'
import { useWindowSize } from '../../hooks/screenSize'

const Controls = ({ hammerDeltaX }) => {
  const { nodes, materials } = useGLTF('./models/coffeeshop.glb')
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const [openMediaPlayer, setOpenMediaPlayer] = useRecoilState(openMediaPlayerAtom)

  useEffect(() => {
    if (
      (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
        cameraNameSwap !== Constants.CAMERA_NAMES.ORTHOGRAPHIC) ||
      (cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
        cameraNameSwap === Constants.CAMERA_NAMES.ORTHOGRAPHIC)
    ) {
      setOpenMediaPlayer(false)
      setTimeout(() => setCameraName(cameraNameSwap), Constants.CAMERA_SWAP_LOADING_TIME * 1000)
    }
  }, [cameraNameSwap])

  const { defaultRotation, rotationRate, rotationLerp } = useControls(
    'Controls',
    {
      defaultRotation: {
        value: { x: 0.17, y: -0.24 },
        x: { max: 0.5, min: 0, step: 0.01 },
        y: { max: 1, min: -1, step: 0.01 }
      },
      rotationRate: { value: 0.02, max: 0.2, min: 0, step: 0.01 },
      rotationLerp: { value: 0.04, max: 1, min: 0, step: 0.01 },
      rotationEaseType: {
        options: [
          'none',
          'power1.inOut',
          'power2.inOut',
          'power3.inOut',
          'circ.inOut',
          'expo.inOut',
          'sine.inOut'
        ],
        value: 'power2.inOut'
      }
    },
    { collapsed: true }
  )

  const wholeRef = useRef()
  const controlsRef = useRef()
  const mouse = useMouse()
  const windowSize = useWindowSize()

  // Controls with mouse movement
  useFrame(() => {
    if (windowSize.width && cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      let x = 0
      if (windowSize.width >= 1024) {
        x = mouse.x / windowSize.width - 0.5
      } else {
        x = (hammerDeltaX / windowSize.width) * 1.5
      }
      controlsRef.current.rotation.y = MathUtils.lerp(
        controlsRef.current.rotation.y,
        Math.PI * (defaultRotation.y + x * rotationRate),
        rotationLerp
      )
    }
  })

  return (
    <>
      <group ref={wholeRef}>
        <group
          rotation={[Math.PI * defaultRotation.x, Math.PI * defaultRotation.y, 0]}
          ref={controlsRef}
        >
          <CameraPerspective />
          <CoffeeShop nodes={nodes} materials={materials} />
          <mesh
            name="BaseFloor"
            receiveShadow
            position-y={-3}
            rotation-x={-Math.PI / 2}
            scale={100}
          >
            <planeGeometry />
            <meshStandardMaterial color="#fffff0" />
          </mesh>
          <Lighting />
        </group>
        <LoadingCoffeeMug nodes={nodes} materials={materials} wholeRef={wholeRef} />
      </group>
    </>
  )
}
export default Controls
