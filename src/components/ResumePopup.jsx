import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'

const ResumePopup = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE3 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE3 && (
          <motion.a
            href="./docs/Resume%20-%20Bach%20Viet%20Ha.pdf"
            target="_blank"
            initial={{ opacity: 0, translateY: -500 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -500 }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-4 left-4 right-4 mx-auto flex flex-col items-center justify-center bg-white/30 p-3 font-medium rounded-xl"
            style={{ maxWidth: 400 }}
          >
            <b>
              Check my <span className="underline">resume</span> here!
            </b>
            <img src="./images/document.svg" className="w-8 h-8 mt-1" alt="download resume" />
          </motion.a>
        )}
    </AnimatePresence>
  )
}
export default ResumePopup
