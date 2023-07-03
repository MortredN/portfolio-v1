import { folder, useControls } from 'leva'

const Lighting = () => {
  const {
    ambientLightEnable,
    ambientLightIntensity,
    sunLightEnable,
    sunLightIntensity,
    sunLightPosition
  } = useControls(
    'Lighting',
    {
      Ambient: folder({
        ambientLightEnable: true,
        ambientLightIntensity: 0.55
      }),
      Sun: folder({
        sunLightEnable: true,
        sunLightIntensity: 0.85,
        sunLightPosition: [6, 9, 3]
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
    </>
  )
}
export default Lighting
