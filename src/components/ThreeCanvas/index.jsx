import { Canvas } from '@react-three/fiber'
import Controls from './Controls'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { cameraOrthoAtom } from '../../utils/recoil'

const ThreeCanvas = () => {
  const { perf } = useControls('Debug', { perf: true })
  const [ortho, setOrtho] = useRecoilState(cameraOrthoAtom)

  return (
    <>
      <Canvas shadows orthographic camera={{}} style={{ touchAction: 'none' }}>
        <OrthographicCamera
          position={[0, 0, 200]}
          zoom={50}
          near={1}
          far={2000}
          makeDefault={ortho}
        />
        <PerspectiveCamera
          position={[0, 0, 0]}
          fov={120}
          near={1}
          far={2000}
          makeDefault={!ortho}
        />
        <Controls />
        {perf && <Perf position="top-left" />}
      </Canvas>
    </>
  )
}
export default ThreeCanvas
