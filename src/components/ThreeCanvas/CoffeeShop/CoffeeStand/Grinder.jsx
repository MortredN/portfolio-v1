// import { useFrame } from '@react-three/fiber'
// import { useRef } from 'react'

const Grinder = (props) => {
  const { nodes, materials } = props
  // const coffeeBeansRef = useRef()

  // useFrame(({ clock }) => {
  //   const time = clock.elapsedTime

  //   coffeeBeansRef.current.rotation.y = time * 3
  // })
  return (
    <group name="GrinderGroup" position={[0.25, 2, -2.11]}>
      <group name="Grinder" rotation={[0, Math.PI / 2, 0]} scale={0.33}>
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Clock}
        />
        <mesh
          name="Cylinder001_1"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.PressSteel}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} scale={0.33}>
        <mesh name="GrinderGlass" geometry={nodes.BlenderGlass.geometry}>
          <meshBasicMaterial color="#61bfcc" transparent opacity={0.5} />
        </mesh>
        {/* <points name="CoffeeBeans" ref={coffeeBeansRef} position={[0, 3.85, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 1.2, 32, 16, true]} />
          <pointsMaterial color="#613B19" size={0.044} sizeAttenuation={true} />
        </points> */}
      </group>
    </group>
  )
}
export default Grinder
