import { PresentationControls, useGLTF, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import CoffeeShop from './CoffeeShop'

const Experience = () => {
  return (
    <Canvas
      orthographic
      camera={{
        zoom: 50,
        top: 200,
        bottom: -200,
        left: 200,
        right: -200,
        near: 1,
        far: 2000,
        position: [0, 0, 200]
      }}
      style={{ touchAction: 'none' }}
    >
      <CoffeeShop />
    </Canvas>
  )
}
export default Experience
