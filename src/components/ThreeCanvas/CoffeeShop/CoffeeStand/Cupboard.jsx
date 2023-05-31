const Cupboard = (props) => {
  const { nodes, materials } = props

  return (
    <group name="CupboardGroup" position={[-0.25, 2.75, -0.5]}>
      <mesh
        name="Cupboard"
        castShadow
        receiveShadow
        geometry={nodes.Cupboard.geometry}
        material={materials.TableWood}
      />
      <mesh
        name="Mug01"
        castShadow
        receiveShadow
        geometry={nodes.Mug01.geometry}
        material={materials.Cup}
        position={[0.02, 0.04, 0]}
        rotation={[-Math.PI, Math.PI / 8, -Math.PI]}
        scale={2}
      />
      <mesh
        name="Mug02"
        castShadow
        receiveShadow
        geometry={nodes.Mug02.geometry}
        material={materials.Cup}
        position={[0.02, -0.67, 0.4]}
        rotation={[-Math.PI, Math.PI / 8, -Math.PI]}
        scale={2}
      />
      <mesh
        name="Mug03"
        castShadow
        receiveShadow
        geometry={nodes.Mug03.geometry}
        material={materials.Cup}
        position={[0.02, -0.67, -0.4]}
        rotation={[-Math.PI, Math.PI / 8, -Math.PI]}
        scale={2}
      />
    </group>
  )
}
export default Cupboard
