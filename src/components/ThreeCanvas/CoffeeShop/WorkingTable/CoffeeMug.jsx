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
    </group>
  )
}
export default CoffeeMug
