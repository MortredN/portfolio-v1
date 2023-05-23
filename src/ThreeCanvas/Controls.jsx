import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import CoffeeShop from './CoffeeShop'
import Lighting from './Lighting'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const defaultRotation = { x: Math.PI * 0.175, y: -Math.PI * 0.2375 }

const Controls = () => {
  const wholeRef = useRef()
  const { enableOrbit } = useControls({ enableOrbit: false })
  const { camera } = useThree()

  // Controls with mouse movement
  useFrame(({ mouse }) => {
    if (!enableOrbit) {
      gsap.to(wholeRef.current.rotation, {
        y: defaultRotation.y + mouse.x * Math.PI * 0.0375,
        ease: 'power2.inOut',
        duration: 0.075
      })
    }
  })

  // Reset from debug orbit controls to default camera
  useEffect(() => {
    if (!enableOrbit) {
      camera.position.set(0, 0, 200)
      camera.rotation.set(0, 0, 0)
      camera.zoom = 50
      camera.updateProjectionMatrix()
    }
  }, [enableOrbit])

  return (
    <>
      <group rotation={[defaultRotation.x, defaultRotation.y, 0]} ref={wholeRef}>
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
