import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'
import { useWindowSize } from '@/hooks/screenSize'
import { useRouter } from '@/hooks/router'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Bookshelf = (props) => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const { nodes, materials } = props
  const windowSize = useWindowSize()
  const router = useRouter()

  const navigateToContact = (event) => {
    event.stopPropagation()
    if (cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      router.push('/contact')
    }
  }

  const openBookLink = (event, type) => {
    if (cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC) {
      event.stopPropagation()
      let link = null
      switch (type) {
        case 'email':
          link = Constants.SOCIAL_LINKS.EMAIL
          break
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

  const bookLinkedinRef = useRef()
  const bookGitHubRef = useRef()
  const bookTwitterRef = useRef()
  const bookEmailRef = useRef()

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

  useFrame(({ clock }) => {
    const time = clock.elapsedTime
    const loopTime = time % 10

    if (loopTime >= 0 && loopTime < 0.5) {
      bookLinkedinRef.current.position.z = loopTime * 0.2
    } else if (loopTime >= 0.5 && loopTime < 5) {
      bookLinkedinRef.current.position.z = 0.1
    } else if (loopTime >= 5 && loopTime < 5.5) {
      bookLinkedinRef.current.position.z = (5.5 - loopTime) * 0.2
    } else {
      bookLinkedinRef.current.position.z = 0
    }

    if (loopTime >= 1 && loopTime < 1.5) {
      bookGitHubRef.current.position.z = (loopTime - 1) * 0.2
    } else if (loopTime >= 1.5 && loopTime < 6) {
      bookGitHubRef.current.position.z = 0.1
    } else if (loopTime >= 6 && loopTime < 6.5) {
      bookGitHubRef.current.position.z = (6.5 - loopTime) * 0.2
    } else {
      bookGitHubRef.current.position.z = 0
    }

    if (loopTime >= 2 && loopTime < 2.5) {
      bookTwitterRef.current.position.z = (loopTime - 2) * 0.2
    } else if (loopTime >= 2.5 && loopTime < 7) {
      bookTwitterRef.current.position.z = 0.1
    } else if (loopTime >= 7 && loopTime < 7.5) {
      bookTwitterRef.current.position.z = (7.5 - loopTime) * 0.2
    } else {
      bookTwitterRef.current.position.z = 0
    }

    if (loopTime >= 3 && loopTime < 3.5) {
      bookEmailRef.current.position.z = (loopTime - 3) * 0.2
    } else if (loopTime >= 3.5 && loopTime < 8) {
      bookEmailRef.current.position.z = 0.1
    } else if (loopTime >= 8 && loopTime < 8.5) {
      bookEmailRef.current.position.z = (8.5 - loopTime) * 0.2
    } else {
      bookEmailRef.current.position.z = 0
    }
  })

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
          <Html
            center
            position={windowSize.width >= 1024 ? [1.25, 1.25, -1.5] : [0, 2, 0]}
            zIndexRange={[20, 0]}
          >
            <button
              aria-label={'3 Contacts'}
              type="button"
              onClick={navigateToContact}
              className={`flex cursor-pointer items-center font-semibold font-title ${
                windowSize.width >= 1024 ? `gap-x-2.5` : `flex-col-reverse gap-y-1.5`
              }`}
            >
              <span className="w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center relative">
                <span
                  className="absolute inset-0.5 w-7 lg:w-9 h-7 lg:h-9 bg-coffee-3 rounded-full animate-ping"
                  style={{ animationDuration: `2s` }}
                />
                <span className="w-full h-full flex items-center justify-center text-xl lg:text-2xl bg-coffee-3 rounded-full text-white z-10">
                  3
                </span>
              </span>
              <span className="bg-white/75 rounded-lg py-1 px-2 text-lg lg:text-xl">Contacts</span>
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
        <group position={[0, 0, 0.11]}>
          <group
            name="BookLinkedin"
            ref={bookLinkedinRef}
            position={[0.28, 1.62, 0]}
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
            ref={bookGitHubRef}
            position={[-0.27, 1.07, 0]}
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
            name="BookEmail"
            ref={bookEmailRef}
            position={[-0.09, 1.25, 0]}
            rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
            scale={3.5}
            onClick={(event) => openBookLink(event, 'email')}
            onPointerEnter={onBookHoverEnter}
            onPointerLeave={onBookHoverLeave}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034.geometry}
              material={materials.BookCoverEmailColor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_1.geometry}
              material={materials.BookCoverEmail}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_2.geometry}
              material={materials.BookPaper}
            />
          </group>
          <group
            name="BookTwitter"
            ref={bookTwitterRef}
            position={[0.09, 0.61, 0]}
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
