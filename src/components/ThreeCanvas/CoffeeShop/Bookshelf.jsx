import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../../utils/recoil'
import Constants from '../../../utils/constants'

const Bookshelf = (props) => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const { nodes, materials } = props

  return (
    <>
      <group
        name="BookshelfGroup"
        position={[2.65, 0, -3.58]}
        onClick={(event) => {
          event.stopPropagation()
          setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)
        }}
      >
        <mesh
          name="Bookshelf"
          castShadow
          receiveShadow
          geometry={nodes.Bookshelf.geometry}
          material={materials.TableWood}
          scale={0.6}
        />
        <group
          name="BookLinkedin"
          position={[0.28, 1.62, 0.11]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
          scale={3.5}
        >
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.BookCoverLinkedinColor}
          />
          <mesh
            name="Cube020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials.BookCoverLinkedin}
          />
          <mesh
            name="Cube020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="BookGithub"
          position={[-0.26, 1.06, 0.11]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
          scale={3.5}
        >
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.BookCoverGithubColor}
          />
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials.BookCoverGithub}
          />
          <mesh
            name="Cube023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="BookTwitter"
          position={[0.09, 0.61, 0.11]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
          scale={3.5}
        >
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.BookCoverTwitterColor}
          />
          <mesh
            name="Cube025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials.BookColorTwitter}
          />
          <mesh
            name="Cube025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="Book001"
          position={[0.37, 1.71, 0.11]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
          scale={3.15}
        >
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.BookCover02}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="Book002"
          position={[0.18, 1.52, 0.11]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
          scale={3.5}
        >
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.BookCover03}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="Book004"
          position={[-0.17, 1.15, 0.11]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
          scale={3.15}
        >
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials.BookCover01}
          />
          <mesh
            name="Cube024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials.BookPaper}
          />
        </group>
        <group
          name="Book006"
          position={[0, 0.7, 0.11]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
          scale={3.15}
        >
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.BookCover02}
          />
          <mesh
            name="Cube026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials.BookPaper}
          />
        </group>
      </group>
    </>
  )
}
export default Bookshelf
