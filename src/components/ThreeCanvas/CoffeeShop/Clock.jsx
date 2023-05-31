import { useEffect, useRef } from 'react'

const Clock = (props) => {
  const { nodes, materials } = props

  const pointHourRef = useRef()
  const pointMinuteRef = useRef()
  const pointSecondRef = useRef()

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date()

      const hours = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      pointHourRef.current.rotation.z =
        (-Math.PI * 2 * (hours + (minutes + seconds / 60) / 60)) / 12
      pointMinuteRef.current.rotation.z = (-Math.PI * 2 * (minutes + seconds / 60)) / 60
      pointSecondRef.current.rotation.z = -Math.PI * 2 * (seconds / 60)
    }, 1000)

    return () => clearInterval(clockInterval)
  }, [])

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
        ref={pointHourRef}
        castShadow
        receiveShadow
        geometry={nodes.PointHour.geometry}
        material={materials.Window}
        rotation={[0, 0, 0]}
      />
      <mesh
        name="PointMinute"
        ref={pointMinuteRef}
        castShadow
        receiveShadow
        geometry={nodes.PointMinute.geometry}
        material={materials.Window}
        position={[0, 0, 0.01]}
        rotation={[0, 0, 0]}
      />
      <mesh
        name="PointSecond"
        ref={pointSecondRef}
        castShadow
        receiveShadow
        geometry={nodes.PointSecond.geometry}
        material={materials.Window}
        position={[0, 0, 0.02]}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}
export default Clock
