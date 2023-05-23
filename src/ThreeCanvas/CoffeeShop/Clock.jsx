const Clock = ({ nodes, materials }) => {
  return (
    <group position={[3, 4.75, -4]}>
      <mesh
        name="Clock"
        castShadow
        receiveShadow
        geometry={nodes.Clock.geometry}
        material={materials.Clock}
      />
      <mesh
        name="PointHour"
        castShadow
        receiveShadow
        geometry={nodes.PointHour.geometry}
        material={materials.Window}
        rotation={[0, 0, -Math.PI * 0.25]}
      />
      <mesh
        name="PointMinute"
        castShadow
        receiveShadow
        geometry={nodes.PointMinute.geometry}
        material={materials.Window}
        rotation={[0, 0, -Math.PI * 1.5]}
      />
      <mesh
        name="PointSecond"
        castShadow
        receiveShadow
        geometry={nodes.PointSecond.geometry}
        material={materials.Window}
        rotation={[0, 0, -Math.PI]}
      />
    </group>
  )
}
export default Clock
