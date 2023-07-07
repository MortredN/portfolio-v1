import { useRecoilState } from 'recoil'
import { motion, useCycle } from 'framer-motion'
import { useRef } from 'react'
import Constants from '../../utils/constants'
import { cameraNameAtom, cameraNameSwapAtom } from '../../utils/recoil'
import { useWindowSize } from '../../hooks/screenSize'
import { MenuToggle } from './MenuToggle'
import NavItem from './NavItem'

const navbarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.25,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const Navbar = () => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const screenSize = useWindowSize()

  return cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC ? (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={screenSize.height}
        ref={containerRef}
        className="fixed top-0 bottom-0 right-0 w-[300px] z-40"
      >
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-[300px] bg-coffee-2"
          variants={navbarVariants}
        />
        <motion.div variants={listVariants} className="absolute top-24 mx-8 space-y-8">
          <NavItem
            onClick={() => {
              toggleOpen()
              setCameraNameSwap(Constants.CAMERA_NAMES.ORTHOGRAPHIC)
            }}
            active={!isOpen || cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC}
          >
            <img src="./images/home.svg" className="w-8 h-8" />
            <span className="flex-1 text-lg font-semibold mt-2">Home</span>
          </NavItem>
          <NavItem
            onClick={() => {
              toggleOpen()
              setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)
              setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE1)
            }}
            active={!isOpen || cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1}
          >
            <span className="w-8 h-8 text-center text-2xl font-bold">1</span>
            <span className="flex-1 text-lg font-semibold mt-2">About Me</span>
          </NavItem>
          <NavItem
            onClick={() => {
              toggleOpen()
              setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)
              setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE2)
            }}
            active={!isOpen || cameraName === Constants.CAMERA_NAMES.PERSPECTIVE2}
          >
            <span className="w-8 h-8 text-center text-2xl font-bold">2</span>
            <span className="flex-1 text-lg font-semibold mt-2">Work Experiences & Projects</span>
          </NavItem>
          <NavItem
            onClick={() => {
              toggleOpen()
              setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)
              setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE3)
            }}
            active={!isOpen || cameraName === Constants.CAMERA_NAMES.PERSPECTIVE3}
          >
            <span className="w-8 h-8 text-center text-2xl font-bold">3</span>
            <span className="flex-1 text-lg font-semibold mt-2">Contacts</span>
          </NavItem>
        </motion.div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </>
  ) : null
}
export default Navbar
