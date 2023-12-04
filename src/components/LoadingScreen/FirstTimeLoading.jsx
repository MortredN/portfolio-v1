import { animate, motion, useCycle } from 'framer-motion'
import { useWindowSize } from '../../hooks/screenSize'
import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import FirstTimeLoadingCircle from './FirstTimeLoadingCircle'
import { useRecoilState } from 'recoil'
import { firstTimeLoadingEndAtom } from '../../utils/recoil'

const navbarVariants = {
  open: (screenSize) => {
    return {
      clipPath: `circle(0px at ${(screenSize?.width ?? 1000) * 0.5}px ${
        (screenSize?.height ?? 1000) * 0.5
      }px)`,
      transition: {
        type: 'spring',
        stiffness: 30,
        restDelta: 2
      }
    }
  },
  closed: (screenSize) => {
    return {
      clipPath: `circle(${(screenSize?.height ?? 1000) * 2 + 200}px at ${
        (screenSize?.width ?? 1000) * 0.5
      }px ${(screenSize?.height ?? 1000) * 0.5}px)`,
      transition: {
        type: 'spring',
        stiffness: 30,
        restDelta: 2
      }
    }
  }
}

const FirstTimeLoading = () => {
  const [hidden, setHidden] = useState(false)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const screenSize = useWindowSize()

  const { active, progress } = useProgress()

  const [from, setFrom] = useState(0)
  const [renderedProgress, setRenderedProgress] = useState(0)
  const [firstTimeLoadingEnd, setFirstTimeLoadingEnd] = useRecoilState(firstTimeLoadingEndAtom)

  const allowOpen = !firstTimeLoadingEnd && !active && renderedProgress === 100

  useEffect(() => {
    if (allowOpen) {
      setTimeout(() => {
        setFirstTimeLoadingEnd(true)
        setTimeout(() => setHidden(true), 1000)
        toggleOpen()
      }, 2000)
    }
  }, [allowOpen])

  useEffect(() => {
    const controls = animate(from, progress, {
      duration: 1,
      ease: `easeInOut`,
      onUpdate(value) {
        setFrom(from)
        setRenderedProgress(value)
      }
    })

    return () => controls.stop()
  }, [from, progress])

  return !hidden ? (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={`fixed top-0 bottom-0 left-0 h-full w-full z-[60] font-title ${
        allowOpen ? `cursor-pointer` : `cursor-default`
      }`}
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 h-full w-full bg-coffee-3"
        custom={screenSize}
        variants={navbarVariants}
      >
        <FirstTimeLoadingCircle allowOpen={allowOpen} progress={renderedProgress} />
      </motion.div>
    </motion.div>
  ) : (
    true
  )
}
export default FirstTimeLoading
