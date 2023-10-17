const BaseFloor = () => {
  return (
    <mesh name="BaseFloor" receiveShadow position-y={-3} rotation-x={-Math.PI / 2} scale={100}>
      <planeGeometry />
      <meshStandardMaterial color="#c8dbef" />
    </mesh>
  )
}
export default BaseFloor
