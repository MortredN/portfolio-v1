import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../../../utils/recoil'
import Constants from '../../../../utils/constants'

const EspressoMachine = (props) => {
  const { nodes, materials } = props
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)

  return (
    <group
      position={[0.34, 1.99, -3.5]}
      onClick={(event) => {
        event.stopPropagation()
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)
      }}
    >
      <group name="EspressoMachine" scale={0.78}>
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.MachineSteel}
        />
        <mesh
          name="Cube008_1"
          castShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Rubber}
        />
        <mesh
          name="Cube008_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials.TrashBin}
        />
      </group>
    </group>
  )
}
export default EspressoMachine
