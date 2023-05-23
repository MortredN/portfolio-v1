import { useHelper } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import * as THREE from 'three'

const Lighting = () => {
  const { windowLightEnable } = useControls({ windowLightEnable: false })

  const sunLight = useRef(null)
  useHelper(sunLight, THREE.DirectionalLightHelper, 1, 'red')

  const windowLight = useRef(null)
  useHelper(windowLight, THREE.PointLightHelper, 0.5, 'blue')

  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight
        castShadow
        intensity={0.8}
        color="#ffffff"
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-normalBias={0.01}
        target-position={[0, -2, 0]}
        position={[6, 8, 4]}
        ref={sunLight}
      />
      <pointLight
        castShadow
        intensity={0.1}
        color="#ffffff"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-normalBias={0.01}
        position={[0, 1.6, -3.9]}
        ref={windowLight}
        visible={windowLightEnable}
      />
      <axesHelper />
    </>
  )
}
export default Lighting
