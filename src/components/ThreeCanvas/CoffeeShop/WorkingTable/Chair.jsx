import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'

const Chair = (props) => {
  const { nodes, materials } = props

  const [cameraName] = useRecoilState(cameraNameAtom)

  return cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC ? (
    <group name="ChairGroup" position={[1.1, 0.02, 0.1]} rotation={[0, -Math.PI / 2, 0]}>
      <mesh
        name="Chair"
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={materials.TableWood}
        scale={2}
      />
      <mesh
        name="ChairCushion"
        castShadow
        receiveShadow
        geometry={nodes.ChairCushion.geometry}
        material={materials.Cushion}
        scale={2}
      />
    </group>
  ) : null
}
export default Chair
