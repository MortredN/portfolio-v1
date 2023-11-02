import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'
import { useWindowSize } from '../hooks/screenSize'
import WorkExperience from './ThreeCanvas/CoffeeShop/WorkingTable/WorkExperience'

const WorkExperienceMobile = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const screenSize = useWindowSize()

  if (screenSize.width >= 1024) return null

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE2 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE2 && (
          <motion.div
            initial={{ opacity: 0, translate: `-50vw` }}
            animate={{ opacity: 1, translate: 0 }}
            exit={{ opacity: 0, translate: `-50vw` }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-0 right-0 w-full h-full flex text-sm"
          >
            <div className="overflow-y-auto">
              <WorkExperience padding={`84px 16px`} />
            </div>
            <div
              className="absolute top-0 h-full w-[300px]"
              style={{ backgroundColor: 'rgba(40, 44, 52, 0.8)', left: `-300px` }}
            />
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default WorkExperienceMobile
