import { folder, useControls } from 'leva'

const Lighting = () => {
  const {
    ambientLightEnable,
    ambientLightIntensity,
    sunLightEnable,
    sunLightIntensity,
    sunLightPosition,
    windowLightEnable,
    windowLightIntensity
  } = useControls(
    'Lighting',
    {
      Ambient: folder({
        ambientLightEnable: true,
        ambientLightIntensity: 0.8
      }),
      Sun: folder({
        sunLightEnable: true,
        sunLightIntensity: 0.8,
        sunLightPosition: [6, 9, 3]
      }),
      Window: folder({
        windowLightEnable: false,
        windowLightIntensity: 0.1
      })
    },
    { collapsed: true }
  )

  return (
    <>
      <ambientLight
        intensity={ambientLightIntensity}
        color="#ffffff"
        visible={ambientLightEnable}
      />
      <directionalLight
        castShadow
        intensity={sunLightIntensity}
        color="#ffffff"
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-normalBias={0.02}
        target-position={[0, -2, 0]}
        position={sunLightPosition}
        visible={sunLightEnable}
      />
      {/* Window light looks cool but shitty performances, Macbook M1 Pro's keyboard literally burns my finger */}
      <pointLight
        castShadow
        intensity={windowLightIntensity}
        color="#ffffff"
        shadow-mapSize={[512, 512]}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-normalBias={0.02}
        position={[0, 1.6, -3.9]}
        visible={windowLightEnable}
      />
    </>
  )
}
export default Lighting
