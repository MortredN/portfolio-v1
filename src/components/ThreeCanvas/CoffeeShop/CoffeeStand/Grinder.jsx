import * as THREE from 'three'

const Grinder = (props) => {
  const { nodes, materials } = props

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
      <mesh
        name="GrinderGlass"
        geometry={nodes.BlenderGlass.geometry}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.33}
      >
        <meshBasicMaterial color="#61bfcc" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}
export default Grinder
