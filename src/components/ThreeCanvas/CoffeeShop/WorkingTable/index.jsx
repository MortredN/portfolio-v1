import Chair from './Chair'
import CoffeeMug from './CoffeeMug'
import Macbook from './Macbook'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../../../../utils/recoil'
import Constants from '../../../../utils/constants'
import { Html } from '@react-three/drei'

const WorkingTable = (props) => {
  const { nodes, materials } = props
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

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
                <Html center position={[0, 2.25, 0.5]} zIndexRange={[20, 0]}>
                  <button
                    type="button"
                    onClick={navigateToWorkExperiences}
                    className="flex flex-col gap-y-1 cursor-pointer items-center font-medium"
                  >
                    <span className="bg-white/50 rounded-lg p-1 whitespace-nowrap">
                      Work Experiences
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center text-sm bg-clock-0 rounded-full text-white">
                      2
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
