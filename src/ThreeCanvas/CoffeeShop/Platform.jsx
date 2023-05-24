const Platform = (props) => {
  const { nodes, materials } = props

  return (
    <group name="Platform">
      <mesh
        name="Plane"
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Platform}
      />
      <mesh
        name="Plane_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials.Platform2}
      />
      <mesh
        name="Plane_2"
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={materials.Floor}
      />
      <mesh
        name="Window"
        castShadow
        receiveShadow
        geometry={nodes.Window.geometry}
        material={materials.Window}
        position={[0, 0, 0.16]}
      />
      <mesh
        name="Trash"
        castShadow
        receiveShadow
        geometry={nodes.Trash.geometry}
        material={materials.TrashBin}
        position={[-3.55, 0, -3.57]}
        scale={2.5}
      />
      <mesh
        name="Stool"
        castShadow
        receiveShadow
        geometry={nodes.Stool.geometry}
        material={materials.TableMetal}
        position={[0.41, 0, -3.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={2}
      >
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.TableWood}
          position={[0, 0.69, 0]}
        />
      </mesh>
    </group>
  )
}
export default Platform
