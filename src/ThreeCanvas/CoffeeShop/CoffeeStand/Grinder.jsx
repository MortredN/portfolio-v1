import * as THREE from 'three'
import grinderGlassFragmentShader from '../../shaders/grinderGlass/fragment.glsl'

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
        castShadow
        geometry={nodes.BlenderGlass.geometry}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.33}
      >
        <shaderMaterial
          transparent
          uniforms={{ uColor: { value: new THREE.Color('#74e3f2') } }}
          fragmentShader={grinderGlassFragmentShader}
        />
      </mesh>
    </group>
  )
}
export default Grinder
