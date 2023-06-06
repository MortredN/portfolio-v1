import { Canvas } from '@react-three/fiber'
import Controls from './Controls'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import CameraOrthographic from './CameraOrthographic'

const ThreeCanvas = () => {
  const { perf } = useControls('Debug', { perf: true })

  return (
    <>
      <Canvas shadows style={{ touchAction: 'none' }}>
        <Controls />
        <CameraOrthographic />
        {perf && <Perf position="top-left" />}
      </Canvas>
    </>
  )
}
export default ThreeCanvas
