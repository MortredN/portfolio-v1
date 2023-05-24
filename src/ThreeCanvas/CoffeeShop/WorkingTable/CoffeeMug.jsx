import { extend, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'
import { shaderMaterial } from '@react-three/drei'
import coffeeLatteVertexShader from '../../shaders/coffeeLatte/vertex.glsl'
import coffeeLatteFragmentShader from '../../shaders/coffeeLatte/fragment.glsl'

const CoffeeLatteMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#c19d67')
  },
  coffeeLatteVertexShader,
  coffeeLatteFragmentShader
)

extend({ CoffeeLatteMaterial })

const CoffeeMug = (props) => {
  const { nodes, materials } = props

  const coffeeLatteMaterial = useRef()

  useFrame((state, delta) => {
    coffeeLatteMaterial.current.uTime += delta
  })

  return (
    <group name="CoffeeMugGroup" position={[0.44, 1.61, -0.69]}>
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
        position={[0, 0.16, 0]}
        scale={0.12}
      >
        <coffeeLatteMaterial ref={coffeeLatteMaterial} />
      </mesh>
    </group>
  )
}
export default CoffeeMug
