import Cupboard from './Cupboard'
import EspressoMachine from './EspressoMachine'
import Grinder from './Grinder'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../../../../utils/recoil'
import Constants from '../../../../utils/constants'
import { Html } from '@react-three/drei'

const CoffeeStand = (props) => {
  const { nodes, materials } = props
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  const navigateToAboutMe = (event) => {
    event.stopPropagation()
    if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE1)
      document.body.style.cursor = 'default'
    }
  }

  return (
    <>
      <group
        position={[-3.5, 0, 3.5]}
        onClick={navigateToAboutMe}
        onPointerEnter={() => {
          if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
            document.body.style.cursor = 'pointer'
          }
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
      >
        <mesh
          name="StandBrick"
          receiveShadow
          geometry={nodes.StandBrick.geometry}
          material={materials.StandBrick}
        />
        <mesh
          name="StandJoint"
          geometry={nodes.StandJoint.geometry}
          material={materials.StandJoint}
          position={[0.5, 0, -2]}
          scale={1.01}
        />
        <EspressoMachine {...props}>
          {cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap && (
            <Html center position={[-1.5, 2, 2]} zIndexRange={[20, 0]}>
              <button
                type="button"
                onClick={navigateToAboutMe}
                className="flex gap-x-1 cursor-pointer items-center font-semibold"
              >
                <span className="bg-white/50 rounded-lg p-1 whitespace-nowrap">About Me</span>
                <span className="w-6 h-6 flex items-center justify-center text-sm bg-clock-0 rounded-full text-white">
                  1
                </span>
              </button>
            </Html>
          )}
        </EspressoMachine>
        <Grinder {...props} />
        <Cupboard {...props} />
        <mesh
          name="Towel"
          geometry={nodes.Towel.geometry}
          material={materials.Rug}
          position={[1.27, 2.01, -0.5]}
          scale={[0.5, 0.02, 1]}
        />
        <group name="PressGroup" position={[1.38, 2, -2.41]}>
          <mesh
            name="PressHolder"
            castShadow
            geometry={nodes.PressHolder.geometry}
            material={materials.Rubber}
            scale={[0.2, 0.04, 0.2]}
          />
          <group name="Press" position={[-0.03, 0.06, 0]} scale={[0.11, 0.05, 0.11]}>
            <mesh
              name="Cylinder007"
              receiveShadow
              geometry={nodes.Cylinder007.geometry}
              material={materials.PressSteel}
            />
            <mesh
              name="Cylinder007_1"
              castShadow
              geometry={nodes.Cylinder007_1.geometry}
              material={materials.PressWood}
            />
          </group>
        </group>
      </group>
    </>
  )
}
export default CoffeeStand
