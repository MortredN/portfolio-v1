import { Canvas } from '@react-three/fiber'
import Controls from './Controls'
import { Perf } from 'r3f-perf'
import { Leva, useControls } from 'leva'
import * as THREE from 'three'
import CameraOrthographic from './CameraOrthographic'
import MobileSwipe from '@/components/MobileSwipe'

const ThreeCanvas = () => {
  const searchParams = new URLSearchParams(document.location.search)
  const mode = searchParams.get('mode')
  const { perf } = useControls('Debug', { perf: mode === 'debug' })

  return (
    <MobileSwipe>
      {(deltaX) => (
        <>
          <Canvas
            eventPrefix="client"
            shadows={{ type: THREE.PCFSoftShadowMap }}
            style={{ touchAction: 'none' }}
          >
            <Controls hammerDeltaX={deltaX} />
            <CameraOrthographic />
            {perf && <Perf position="top-left" />}
          </Canvas>
          <Leva hidden={mode !== 'debug'} />
        </>
      )}
    </MobileSwipe>
  )
}
export default ThreeCanvas
