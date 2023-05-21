import { PresentationControls, useGLTF, useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const CoffeeShop = () => {
  const model = useGLTF('./models/coffeeshop.glb')
  const dirLight = useRef(null)
  useHelper(dirLight, THREE.DirectionalLightHelper, 1, 'red')

  return (
    <>
      <directionalLight
        intensity={1.5}
        color="#ffffff"
        shadow-camera-far={20}
        shadow-mapSize={[1024, 1024]}
        shadow-normalBias={0.05}
        position={[1.5, 7, 3]}
        ref={dirLight}
      />
      <ambientLight intensity={0.4} color="#ffffff" />
      <PresentationControls
        global
        rotation={[0.5, -0.75, 0]}
        polar={[0, 0]}
        azimuth={[-0.25, 0.25]}
      >
        <primitive object={model.scene} position-y={-2} />
      </PresentationControls>
    </>
  )
}
export default CoffeeShop
