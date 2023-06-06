import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import CoffeeShop from './CoffeeShop'
import Lighting from './Lighting'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useRecoilState } from 'recoil'
import { cameraOrthoAtom } from '../../utils/recoil'
import CameraPerspective from './CameraPerspective'

const Controls = () => {
  const { enableOrbit } = useControls('Debug', { enableOrbit: false })
  const [ortho, setOrtho] = useRecoilState(cameraOrthoAtom)
  const { defaultRotation, rotationRate, rotationEaseDuration, rotationEaseType } = useControls(
    'Controls',
    {
      defaultRotation: {
        value: { x: 0.17, y: -0.24 },
        x: { max: 0.5, min: 0, step: 0.01 },
        y: { max: 1, min: -1, step: 0.01 }
      },
      rotationRate: { value: 0.04, max: 0.2, min: 0, step: 0.01 },
      rotationEaseDuration: { value: 0.08, max: 0.2, min: 0, step: 0.01 },
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
  const { camera } = useThree()

  // Controls with mouse movement
  useFrame(({ mouse }) => {
    if (ortho && !enableOrbit) {
      gsap.to(wholeRef.current.rotation, {
        y: Math.PI * (defaultRotation.y + mouse.x * rotationRate),
        ease: rotationEaseType,
        duration: rotationEaseDuration
      })
    }
  })

  // Reset from debug orbit controls to default camera
  useEffect(() => {
    if (!enableOrbit) {
      setOrtho(true)
      camera.position.set(0, 0, 200)
      camera.rotation.set(0, 0, 0)
      camera.zoom = 50
      camera.updateProjectionMatrix()
    }
  }, [enableOrbit])

  return (
    <>
      <group
        rotation={[Math.PI * defaultRotation.x, Math.PI * defaultRotation.y, 0]}
        ref={wholeRef}
      >
        <CameraPerspective />
        <CoffeeShop />
        <mesh name="BaseFloor" receiveShadow position-y={-3} rotation-x={-Math.PI / 2} scale={100}>
          <planeGeometry />
          <meshStandardMaterial color="#fffff0" />
        </mesh>
        <Lighting />
      </group>
      {enableOrbit && <OrbitControls />}
    </>
  )
}
export default Controls
