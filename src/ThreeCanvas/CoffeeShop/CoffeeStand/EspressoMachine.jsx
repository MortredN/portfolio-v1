import * as THREE from 'three'

const EspressoMachine = (props) => {
  const { nodes, materials } = props

  const hoverMaterial = new THREE.MeshBasicMaterial({
    color: '#21cfed',
    transparent: true,
    opacity: 0.7
  })

  return (
    <group position={[0.34, 1.99, -3.5]}>
      <group name="EspressoMachine" scale={0.78}>
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
      <group
        name="EspressoMachineHoverGlow"
        onPointerEnter={() => hoverMaterial.color = '#000000'}
        onPointerOut={() => hoverMaterial.color = '#21cfed'}
        scale={[0.785, 0.79, 0.785]}
        position={[0.01, 0, 0.01]}
      >
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={hoverMaterial} />
        <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={hoverMaterial} />
        <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={hoverMaterial} />
      </group>
    </group>
  )
}
export default EspressoMachine
