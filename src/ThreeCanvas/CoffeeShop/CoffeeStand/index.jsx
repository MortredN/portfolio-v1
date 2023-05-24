import Cupboard from './Cupboard'
import EspressoMachine from './EspressoMachine'
import Grinder from './Grinder'

const CoffeeStand = (props) => {
  const { nodes, materials } = props

  return (
    <>
      <group position={[-3.5, 0, 3.5]}>
        <mesh
          name="StandBrick"
          castShadow
          receiveShadow
          geometry={nodes.StandBrick.geometry}
          material={materials.StandBrick}
        />
        <mesh
          name="StandJoint"
          geometry={nodes.StandJoint.geometry}
          material={materials.StandJoint}
          position={[0.5, 0, -2]}
          scale={1.005}
        />
        <EspressoMachine {...props} />
        <Grinder {...props} />
        <Cupboard {...props} />
        <mesh
          name="Towel"
          receiveShadow
          geometry={nodes.Towel.geometry}
          material={materials.Rug}
          position={[1.27, 2.01, -0.5]}
          scale={[0.5, 0.02, 1]}
        />
        <group name="PressGroup" position={[1.38, 2, -2.41]}>
          <mesh
            name="PressHolder"
            castShadow
            geometry={nodes.PressHolder.geometry}
            material={materials.Rubber}
            scale={[0.2, 0.04, 0.2]}
          />
          <group name="Press" position={[-0.03, 0.06, 0]} scale={[0.11, 0.05, 0.11]}>
            <mesh
              name="Cylinder007"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials.PressSteel}
            />
            <mesh
              name="Cylinder007_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_1.geometry}
              material={materials.PressWood}
            />
          </group>
        </group>
      </group>
    </>
  )
}
export default CoffeeStand
