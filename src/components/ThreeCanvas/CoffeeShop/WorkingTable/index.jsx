import CoffeeMug from './CoffeeMug'
import Macbook from './Macbook'

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
          <Macbook {...props} />
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
