import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../../../utils/recoil'
import Constants from '../../../../utils/constants'

const Macbook = ({ nodes, materials }) => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)

  return (
    <group
      name="MacbookGroup"
      position={[0.62, 1.58, 0.06]}
      onClick={(event) => {
        event.stopPropagation()
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)
      }}
    >
      <group name="Macbook" rotation={[0, -Math.PI / 2, 0]} scale={[0.49, 0.01, 0.45]}>
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Macbook}
        />
        <mesh
          name="Cube028_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials.Rubber}
        />
      </group>
      <mesh
        name="MacbookScreen"
        castShadow
        receiveShadow
        geometry={nodes.MacbookScreen.geometry}
        material={materials.Window}
        position={[0, 0.01, 0]} // TODO: Fix z-fighting
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.49, 0.01, 0.45]}
      />
    </group>
  )
}
export default Macbook
