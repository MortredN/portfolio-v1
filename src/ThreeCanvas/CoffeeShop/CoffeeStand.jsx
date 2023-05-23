const CoffeeStand = ({ nodes, materials }) => {
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
        <group name="Espresso" position={[0.34, 1.99, -3.5]} scale={0.78}>
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.MachineSteel}
          />
          <mesh
            name="Cube008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Rubber}
          />
          <mesh
            name="Cube008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.TrashBin}
          />
        </group>
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
        <group name="BlenderGroup" position={[0.25, 2, -2.11]}>
          <group name="Blender" rotation={[0, Math.PI / 2, 0]} scale={0.33}>
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
            name="BlenderGlass"
            castShadow
            receiveShadow
            geometry={nodes.BlenderGlass.geometry}
            material={materials.Glass}
            rotation={[0, Math.PI / 2, 0]}
            scale={0.33}
          />
        </group>
      </group>
    </>
  )
}
export default CoffeeStand
