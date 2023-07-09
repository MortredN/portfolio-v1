import { useRecoilState } from 'recoil'
import { motion, useCycle } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Constants from '../../utils/constants'
import { cameraNameAtom, cameraNameSwapAtom, firstTimeNavbarAtom } from '../../utils/recoil'
import { useWindowSize } from '../../hooks/screenSize'
import { MenuToggle } from './MenuToggle'
import NavItem from './NavItem'

const navbarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 44px 44px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 44px 44px)',
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
  const [firstTimeNavbar, setFirstTimeNavbar] = useRecoilState(firstTimeNavbarAtom)
  const [containerSize, setContainerSize] = useState({ width: 100, height: 100 })
  const timeoutRef = useRef(null)

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const screenSize = useWindowSize()

  useEffect(() => {
    if (isOpen) {
      setContainerSize({ width: 300, height: `100%` })
    } else {
      timeoutRef.current = setTimeout(() => {
        setContainerSize({ width: 75, height: 75 })
      }, 1000)
    }
    return () => {
      clearTimeout(timeoutRef?.current)
    }
  }, [isOpen])

  return cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC ? (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={screenSize.height}
        ref={containerRef}
        className="fixed top-0 bottom-0 left-0 z-40 font-title transition"
        style={containerSize}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 bg-coffee-2 transition"
          variants={navbarVariants}
          style={containerSize}
        />
        <motion.div variants={listVariants} className="absolute top-32 mx-8 space-y-12">
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
        <MenuToggle
          toggle={() => {
            toggleOpen()
            setFirstTimeNavbar(true)
          }}
        />
      </motion.nav>
      {!firstTimeNavbar && (
        <img
          src="./images/arrow_up_left.svg"
          width={80}
          height={80}
          className="fixed"
          style={{ top: 50, left: 50, animation: `arrow-bounce 1s infinite ease` }}
        />
      )}
    </>
  ) : null
}
export default Navbar
