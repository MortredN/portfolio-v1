const Wallshelf = (props) => {
  const { nodes, materials } = props

  return (
    <>
      <group name="WallshelfGroup" position={[-3.5, 3.3, -2.5]}>
        <mesh
          name="Shelf"
          castShadow
          receiveShadow
          geometry={nodes.Shelf.geometry}
          material={materials.TableWood}
        />
        <group name="CoffeeBag01Group" position={[0.1, 0.1, 0.31]} rotation={[0, Math.PI / 9, 0]}>
          <mesh
            name="CoffeeBag"
            castShadow
            receiveShadow
            geometry={nodes.CoffeeBagBag.geometry}
            material={materials.CoffeeBag}
          />
          <mesh
            name="CoffeeBagTag"
            castShadow
            receiveShadow
            geometry={nodes.CoffeeBagTag.geometry}
            material={materials.CoffeeBagTag1}
          />
        </group>
        <group name="CoffeeBag02Group" position={[0.1, 0.1, -0.49]} rotation={[0, -0.26, 0]}>
          <mesh
            name="CoffeeBag02"
            castShadow
            receiveShadow
            geometry={nodes.CoffeeBag02.geometry}
            material={materials.CoffeeBag}
          />
          <mesh
            name="CoffeeBagTag02"
            castShadow
            receiveShadow
            geometry={nodes.CoffeeBagTag02.geometry}
            material={materials.CoffeeBagTag2}
          />
        </group>
        <group name="PotGroup" position={[0, 1.31, 0.37]}>
          <mesh
            name="Pot"
            castShadow
            receiveShadow
            geometry={nodes.Pot.geometry}
            material={materials.Pot}
            scale={[1, 1, 0.88]}
          />
          <mesh
            name="PotDirt"
            castShadow
            receiveShadow
            geometry={nodes.PotDirt.geometry}
            material={materials.PotDirt}
            position={[0, -0.01, 0]}
            scale={[1, 1, 0.88]}
          />
          <mesh
            name="Plant"
            castShadow
            receiveShadow
            geometry={nodes.Plant.geometry}
            material={materials.Plant}
            position={[0.01, 0.29, 0.21]}
            rotation={[0, 0.11, 0]}
          />
          <mesh
            name="Plant001"
            castShadow
            receiveShadow
            geometry={nodes.Plant001.geometry}
            material={materials.Plant}
            position={[0.01, 0.29, -0.24]}
            rotation={[0, 0.45, 0]}
          />
        </group>
        <group
          name="Book007"
          position={[0.3, 1.36, -0.67]}
          rotation={[-Math.PI / 2, 0, 1.12]}
          scale={3.15}
        >
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.BookCover01}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.BookPaper}
          />
        </group>
      </group>
    </>
  )
}
export default Wallshelf
