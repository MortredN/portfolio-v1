import { useRecoilState } from 'recoil'
import Constants from '../utils/constants'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import { AnimatePresence, motion } from 'framer-motion'

const NavbarItem = ({ children, onClick, disabled, ariaLabel }) => {
  return (
    <motion.button
      aria-label={ariaLabel}
      onClick={onClick}
      initial={{ translateY: `100px`, rotate: 180 }}
      animate={{ translateY: 0, rotate: 0 }}
      exit={{ translateY: `100px`, rotate: -180 }}
      transition={{ duration: 1, ease: 'anticipate' }}
      className="button-circle bg-coffee-3 rounded-full flex items-center justify-center disabled:opacity-50"
      style={{ width: 60, height: 60 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}

const Navbar = () => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  const handleChevronClick = (forward) => {
    if (forward) {
      if (cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1) {
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)
        setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE2)
      } else if (cameraName === Constants.CAMERA_NAMES.PERSPECTIVE2) {
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)
        setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE3)
      }
    } else {
      if (cameraName === Constants.CAMERA_NAMES.PERSPECTIVE2) {
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)
        setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE1)
      } else if (cameraName === Constants.CAMERA_NAMES.PERSPECTIVE3) {
        setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)
        setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE2)
      }
    }
  }

  return (
    <AnimatePresence>
      {cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap ? (
        <>
          <div className="fixed bottom-3 left-4 right-4 z-40 flex items-center justify-between lg:justify-center lg:gap-x-4">
            <NavbarItem
              onClick={() => handleChevronClick(false)}
              disabled={cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1}
              ariaLabel="back"
            >
              <img src="./images/chevron-left.svg" className="w-8 h-8" alt="back" />
            </NavbarItem>
            <NavbarItem
              onClick={() => setCameraNameSwap(Constants.CAMERA_NAMES.ORTHOGRAPHIC)}
              ariaLabel="home"
            >
              <img src="./images/home.svg" className="w-8 h-8" alt="home" />
            </NavbarItem>
            <NavbarItem
              onClick={() => handleChevronClick(true)}
              disabled={cameraName === Constants.CAMERA_NAMES.PERSPECTIVE3}
              ariaLabel="next"
            >
              <img src="./images/chevron-right.svg" className="w-8 h-8" alt="next" />
            </NavbarItem>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
export default Navbar
