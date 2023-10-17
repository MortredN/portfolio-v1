import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const smokeGeometry = new THREE.SphereGeometry(0.5, 6)

const EspressoMachineSmoke = ({ index }) => {
  const smokeRef = useRef()
  const positionX = 0.1 + (index % 2 === 0 ? 0.01 * index : -0.01 * index)
  const positionZ = -0.5 + (index % 8) * 0.15
  const scale = 1

  useFrame(({ clock }) => {
    const time = clock.elapsedTime + index * 0.24
    const loopTime = time % 5

    if (loopTime >= 0 && loopTime < 3) {
      if (loopTime >= 0 && loopTime < 1) {
        smokeRef.current.material.opacity = (loopTime / 1) * 0.5
      } else {
        smokeRef.current.material.opacity = (1.5 - loopTime * 0.5) * 0.5
      }
      smokeRef.current.position.y = 0.6 + (loopTime / 3) * 1.3
      smokeRef.current.scale.x = scale * (1 - loopTime / 5)
      smokeRef.current.scale.y = scale * (1 - loopTime / 5)
      smokeRef.current.scale.z = scale * (1 - loopTime / 5)
    } else {
      smokeRef.current.material.opacity = 0
      smokeRef.current.position.y = 0.6
    }
  })

  return (
    <mesh
      ref={smokeRef}
      position={[positionX, 0.6, positionZ]}
      geometry={smokeGeometry}
      scale={scale}
    >
      <meshBasicMaterial color="white" transparent opacity={0.5} />
    </mesh>
  )
}

const EspressoMachine = (props) => {
  const { nodes, materials, children } = props

  return (
    <group position={[0.34, 1.99, -3.5]}>
      {children}
      <group name="EspressoMachine" scale={0.78}>
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.MachineSteel}
        />
        <mesh
          name="Cube008_1"
          castShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Rubber}
        />
        <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={materials.TrashBin} />
        {[...Array(35)].map((_, index) => (
          <EspressoMachineSmoke key={index} index={index} />
        ))}
      </group>
    </group>
  )
}
export default EspressoMachine
