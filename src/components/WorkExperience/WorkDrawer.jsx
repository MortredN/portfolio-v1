import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { displayedWorkAtom } from '../../utils/recoil'
import Works from '../../utils/works'
import Work_2020_Edutech from './WorkListing/2020/Work_2020_Edutech'
import Work_2022_Superjoi from './WorkListing/2022/Work_2022_Superjoi'
import Work_2024_StudentSpace from './WorkListing/2024/Work_2024_StudentSpace'

const WorkDrawer = () => {
  const [displayedWork, setDisplayedWork] = useRecoilState(displayedWorkAtom)

  const renderWork = () => {
    switch (displayedWork) {
      case Works.Y2024.STUDENTSPACE.name:
        return <Work_2024_StudentSpace />
      case Works.Y2022.SUPERJOI.name:
        return <Work_2022_Superjoi />
      case Works.Y2020.EDUTECH.name:
        return <Work_2020_Edutech />
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {!!displayedWork && (
        <motion.div
          initial={{ opacity: 0, translateY: `-100dvh` }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: `-100dvh` }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="bg-coffee-0 absolute top-0 w-full h-[100dvh] lg:h-full flex text-sm z-[45] lg:z-10"
        >
          <div className="overflow-y-auto w-full">
            {renderWork()}
            <div className="fixed bottom-3 left-4 right-4 flex items-center justify-center lg:gap-x-4">
              <motion.button
                aria-label="close"
                onClick={() => setDisplayedWork(null)}
                initial={{ translateY: `100px`, rotate: 180 }}
                animate={{ translateY: 0, rotate: 0 }}
                exit={{ translateY: `100px`, rotate: -180 }}
                transition={{ duration: 1, ease: 'anticipate' }}
                className="button-circle bg-coffee-3 rounded-full flex items-center justify-center"
                style={{ width: 60, height: 60 }}
              >
                <img src="./images/close.svg" className="w-8 h-8" alt="pause" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default WorkDrawer
