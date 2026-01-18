import { Html } from '@react-three/drei'
import Constants from '@/utils/constants'
import { RecoilRoot, useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '@/utils/recoil'
import { useWindowSize } from '@/hooks/screenSize'
import WorkExperience from '@/components/WorkExperience'

const Macbook = ({ nodes, materials, children }) => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const windowSize = useWindowSize()

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
      {((cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC && windowSize.width >= 1024) ||
        (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap)) && (
        <group rotation-y={Math.PI / 2}>
          <Html
            zIndexRange={[10, 0]}
            transform
            rotation={[-0.08, 0, 0]}
            position={[-0.035, 0.37, -0.48]}
            distanceFactor={0.32}
            scale={0.5}
          >
            <RecoilRoot>
              <div
                style={{ width: 1280, height: 800, transform: 'scale(2)' }}
                className="bg-coffee-6 rounded-lg overflow-hidden"
              >
                <WorkExperience />
              </div>
            </RecoilRoot>
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
        <meshBasicMaterial color="#987562" />
      </mesh>
    </group>
  )
}
export default Macbook
