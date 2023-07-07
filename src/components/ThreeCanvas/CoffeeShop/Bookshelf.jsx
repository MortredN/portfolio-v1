import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../../../utils/recoil'
import Constants from '../../../utils/constants'
import { Html } from '@react-three/drei'

const Bookshelf = (props) => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const { nodes, materials } = props

  const navigateToContact = (event) => {
    event.stopPropagation()
    if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE3)
      document.body.style.cursor = 'default'
    }
  }

  const openBookLink = (type) => {
    if (cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      let link = null
      switch (type) {
        case 'linkedin':
          link = Constants.SOCIAL_LINKS.LINKEDIN
          break
        case 'github':
          link = Constants.SOCIAL_LINKS.GITHUB
          break
        case 'twitter':
          link = Constants.SOCIAL_LINKS.TWITTER
          break
        default:
          break
      }
      if (link) window.open(link, '_blank')
    }
  }

  const onBookHoverEnter = (event) => {
    if (cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      event.stopPropagation()
      document.body.style.cursor = 'pointer'
    }
  }
  const onBookHoverLeave = (event) => {
    if (cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      event.stopPropagation()
      document.body.style.cursor = 'default'
    }
  }

  return (
    <>
      <group
        name="BookshelfGroup"
        position={[2.65, 0, -3.58]}
        onClick={navigateToContact}
        onPointerEnter={() => {
          if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
            document.body.style.cursor = 'pointer'
          }
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default'
        }}
      >
        {cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap && (
          <Html center position={[1.25, 1.25, -1]} zIndexRange={[20, 0]}>
            <button
              type="button"
              onClick={navigateToContact}
              className="flex gap-x-1.5 cursor-pointer items-center font-semibold"
            >
              <span className="w-8 h-8 flex items-center justify-center relative">
                <span
                  className="absolute inset-0.5 w-7 h-7 bg-coffee-2 rounded-full animate-ping"
                  style={{ animationDuration: `2s` }}
                />
                <span className="w-full h-full flex items-center justify-center text-lg bg-coffee-2 rounded-full text-white z-10">
                  3
                </span>
              </span>
              <span className="bg-white/75 rounded-lg py-1 px-2">Contacts</span>
            </button>
          </Html>
        )}
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
          onClick={(event) => openBookLink(event, 'linkedin')}
          onPointerEnter={onBookHoverEnter}
          onPointerLeave={onBookHoverLeave}
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
          onClick={(event) => openBookLink(event, 'github')}
          onPointerEnter={onBookHoverEnter}
          onPointerLeave={onBookHoverLeave}
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
          onClick={(event) => openBookLink(event, 'twitter')}
          onPointerEnter={onBookHoverEnter}
          onPointerLeave={onBookHoverLeave}
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
