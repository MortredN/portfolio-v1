import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const smokeGeometry = new THREE.SphereGeometry(0.11, 6)

const CoffeeMugSmoke = ({ index }) => {
  const smokeRef = useRef()
  const positionX = index % 2 === 0 ? 0.01 * index : -0.01 * index
  const scale = 1

  useFrame(({ clock }) => {
    const time = clock.elapsedTime + index
    const loopTime = time % 5

    if (loopTime >= 0 && loopTime < 3) {
      if (loopTime >= 0 && loopTime < 2) {
        smokeRef.current.material.opacity = (loopTime / 2) * 0.5
      } else {
        smokeRef.current.material.opacity = (3 - loopTime) * 0.5
      }
      smokeRef.current.position.y = 0.1 + (loopTime / 3) * 0.3
      smokeRef.current.position.z = 0.025 + (loopTime / 3) * -0.1
      smokeRef.current.scale.x = scale * (1 - loopTime / 5)
      smokeRef.current.scale.y = scale * (1 - loopTime / 5)
      smokeRef.current.scale.z = scale * (1 - loopTime / 5)
    } else {
      smokeRef.current.material.opacity = 0
      smokeRef.current.position.y = 0.1
      smokeRef.current.position.z = 0
    }
  })

  return (
    <mesh
      ref={smokeRef}
      position={[positionX, 0.1, 0]}
      geometry={smokeGeometry}
      scale={scale}
    >
      <meshBasicMaterial color="white" transparent opacity={0.5} />
    </mesh>
  )
}

const CoffeeMug = (props) => {
  const { nodes, materials } = props

  return (
    <group name="CoffeeMugGroup" position={[0.44, 1.61, -0.6]}>
      <mesh
        name="CoffeeMug"
        castShadow
        receiveShadow
        geometry={nodes.MugTable.geometry}
        material={materials.Cup}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={2}
      />
      <mesh
        name="CoffeeLatte"
        geometry={nodes.MugTableCoffee.geometry}
        material={materials.MugCoffee}
        position={[0, 0.16, 0]}
        scale={0.12}
      />
      {[...Array(5)].map((_, index) => (
        <CoffeeMugSmoke key={index} index={index} />
      ))}
    </group>
  )
}
export default CoffeeMug
