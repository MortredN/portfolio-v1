import Cupboard from './Cupboard'
import EspressoMachine from './EspressoMachine'
import Grinder from './Grinder'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'
import { useWindowSize } from '@/hooks/screenSize'
import { useRouter } from '@/hooks/router'
import { Html } from '@react-three/drei'

const CoffeeStand = (props) => {
  const { nodes, materials } = props
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const windowSize = useWindowSize()
  const router = useRouter()

  const navigateToAboutMe = (event) => {
    event.stopPropagation()
    if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      router.push('/about')
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
            <Html
              center
              position={windowSize.width >= 1024 ? [-1.5, 2, 2] : [0, 3, 2]}
              zIndexRange={[20, 0]}
            >
              <button
                aria-label={'1 About me'}
                type="button"
                onClick={navigateToAboutMe}
                className={`flex cursor-pointer items-center font-semibold ${
                  windowSize.width >= 1024 ? `gap-x-2.5` : `flex-col gap-y-1.5`
                }`}
              >
                <span className="bg-white/80 rounded-lg py-1 px-2 whitespace-nowrap text-lg lg:text-xl">
                  About Me
                </span>
                <span className="w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center relative">
                  <span
                    className="absolute inset-0.5 w-7 lg:w-9 h-7 lg:h-9 bg-coffee-3 rounded-full animate-ping"
                    style={{ animationDuration: `2s` }}
                  />
                  <span className="w-full h-full flex items-center justify-center text-xl lg:text-2xl bg-coffee-3 rounded-full text-white z-10">
                    1
                  </span>
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
