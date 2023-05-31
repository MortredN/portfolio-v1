import CoffeeMug from './CoffeeMug'

const WorkingTable = (props) => {
  const { nodes, materials } = props

  return (
    <>
      <group name="WorkingTableGroup" position={[1.5, 0.02, 0]}>
        <mesh
          name="Rug"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Rug}
        />
        <group name="TableGroup" position={[-0.6, 0.02, 0]}>
          <mesh
            name="TableTop"
            castShadow
            receiveShadow
            geometry={nodes.TableTop.geometry}
            material={materials.TableWood}
          />
          <mesh
            name="Table"
            castShadow
            receiveShadow
            geometry={nodes.Table.geometry}
            material={materials.TableMetal}
          />
          <group name="MacbookGroup" position={[0.62, 1.64, 0.06]}>
            <group name="Macbook" rotation={[0, -Math.PI / 2, 0]} scale={[0.49, 0.01, 0.45]}>
              <mesh
                name="Cube028"
                castShadow
                receiveShadow
                geometry={nodes.Cube028.geometry}
                material={materials.Macbook}
              />
              <mesh
                name="Cube028_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube028_1.geometry}
                material={materials.Rubber}
              />
            </group>
            <mesh
              name="MacbookScreen"
              castShadow
              receiveShadow
              geometry={nodes.MacbookScreen.geometry}
              material={materials.Window}
              position={[0, 0.01, 0]} // TODO: Fix z-fighting
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.49, 0.01, 0.45]}
            />
          </group>
          <CoffeeMug {...props} />
        </group>
        <group name="ChairGroup" position={[1.1, 0.02, 0.1]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            name="Chair"
            castShadow
            receiveShadow
            geometry={nodes.Chair.geometry}
            material={materials.TableWood}
            scale={2}
          />
          <mesh
            name="ChairCushion"
            castShadow
            receiveShadow
            geometry={nodes.ChairCushion.geometry}
            material={materials.Cushion}
            scale={2}
          />
        </group>
      </group>
    </>
  )
}
export default WorkingTable
