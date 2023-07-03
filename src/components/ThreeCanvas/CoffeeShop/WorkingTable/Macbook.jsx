const Macbook = ({ nodes, materials, children }) => {
  return (
    <group name="MacbookGroup" position={[0.62, 1.58, 0.06]}>
      {children}
      <group name="Macbook" rotation={[0, -Math.PI / 2, 0]} scale={[0.49, 0.01, 0.45]}>
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Macbook}
        />
        <mesh name="Cube028_1" geometry={nodes.Cube028_1.geometry} material={materials.Rubber} />
      </group>
      <mesh
        name="MacbookScreen"
        castShadow
        receiveShadow
        geometry={nodes.MacbookScreen.geometry}
        material={materials.Window}
        position={[0, 0.01, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.49, 0.01, 0.45]}
      />
    </group>
  )
}
export default Macbook
