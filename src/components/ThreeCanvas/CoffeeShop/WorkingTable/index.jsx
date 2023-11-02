import Chair from './Chair'
import CoffeeMug from './CoffeeMug'
import Macbook from './Macbook'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../../../../utils/recoil'
import Constants from '../../../../utils/constants'
import { useWindowSize } from '../../../../hooks/screenSize'
import { Html } from '@react-three/drei'

const WorkingTable = (props) => {
  const { nodes, materials } = props
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const windowSize = useWindowSize()

  const navigateToWorkExperiences = (event) => {
    event.stopPropagation()
    if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE2)
      document.body.style.cursor = 'default'
    }
  }

  return (
    <>
      <group name="WorkingTableGroup" position={[1.5, 0.02, 0]}>
        <mesh
          name="Rug"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Rug}
        />
        <group
          name="TableGroup"
          position={[-0.6, 0.02, 0]}
          onClick={navigateToWorkExperiences}
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
            name="TableTop"
            castShadow
            receiveShadow
            geometry={nodes.TableTop.geometry}
            material={materials.TableWood}
          />
          <mesh
            name="Table"
            castShadow
            receiveShadow
            geometry={nodes.Table.geometry}
            material={materials.TableMetal}
          />
          <Macbook {...props}>
            {cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
              cameraName === cameraNameSwap && (
                <Html
                  center
                  position={windowSize.width >= 1024 ? [0, 2.1, 0.5] : [-0.5, -2, 1]}
                  zIndexRange={[20, 0]}
                >
                  <button
                    aria-label={'2 Experiences & Projects'}
                    type="button"
                    onClick={navigateToWorkExperiences}
                    className={`flex gap-y-1.5 cursor-pointer items-center font-semibold font-title ${
                      windowSize.width >= 1024 ? `flex-col` : `flex-col-reverse`
                    }`}
                  >
                    <span className="bg-white/75 rounded-lg py-1 px-2 whitespace-nowrap">
                      Experiences
                      <br />& Projects
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center relative">
                      <span
                        className="absolute inset-0.5 w-7 h-7 bg-clock-0 rounded-full animate-ping"
                        style={{ animationDuration: `2s` }}
                      />
                      <span className="w-full h-full flex items-center justify-center text-lg bg-clock-0 rounded-full text-white z-10">
                        2
                      </span>
                    </span>
                  </button>
                </Html>
              )}
          </Macbook>
          <CoffeeMug {...props} />
        </group>
        <Chair {...props} />
      </group>
    </>
  )
}
export default WorkingTable
