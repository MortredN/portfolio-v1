import { Canvas } from '@react-three/fiber'
import Controls from './Controls'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

const ThreeCanvas = () => {
  const { perf } = useControls('Debug', { perf: false })

  return (
    <>
      <Canvas
        shadows
        orthographic
        camera={{
          zoom: 50,
          near: 1,
          far: 2000,
          position: [0, 0, 200]
        }}
        style={{ touchAction: 'none' }}
      >
        <Controls />
        {perf && <Perf position="top-left" />}
      </Canvas>
    </>
  )
}
export default ThreeCanvas
