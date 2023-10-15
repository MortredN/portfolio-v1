import { Html } from '@react-three/drei'
import Constants from '../../../../utils/constants'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../../../../utils/recoil'
import WorkExperience from './WorkExperience'

const Macbook = ({ nodes, materials, children }) => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  return (
    <group name="MacbookGroup" position={[0.62, 1.58, 0.06]}>
      {children}
      <group name="Macbook" rotation={[0, -Math.PI / 2, 0]} scale={[0.49, 0.01, 0.45]}>
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Macbook}
        />
        <mesh name="Cube028_1" geometry={nodes.Cube028_1.geometry} material={materials.Rubber} />
      </group>
      {(cameraName === cameraNameSwap ||
        cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC ||
        cameraNameSwap === Constants.CAMERA_NAMES.ORTHOGRAPHIC) && (
        <group rotation-y={Math.PI / 2}>
          <Html
            zIndexRange={[10, 0]}
            transform
            rotation={[-0.08, 0, 0]}
            position={[-0.035, 0.37, -0.48]}
            distanceFactor={0.32}
            scale={0.5}
          >
            <div
              style={{ width: 1280, height: 800, transform: "scale(2)" }}
              className="bg-screen p-4 rounded-lg overflow-y-auto custom-scrollbar text-lg"
            >
              <WorkExperience />
            </div>
          </Html>
        </group>
      )}
      <mesh
        name="MacbookScreen"
        castShadow
        receiveShadow
        geometry={nodes.MacbookScreen.geometry}
        position={[0, 0.01, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.49, 0.01, 0.45]}
      >
        <meshBasicMaterial color="#3d4148" />
      </mesh>
    </group>
  )
}
export default Macbook
