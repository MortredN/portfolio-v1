import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'

const ContactMeEmail = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE3 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE3 && (
          <motion.div
            initial={{ opacity: 0, translateY: -500 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -500 }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-4 left-4 right-4 w-full mx-auto flex flex-col items-center justify-center bg-white/30 p-3 font-medium rounded-xl"
            style={{ maxWidth: 400 }}
          >
            <span>Or contact me through:</span>
            <a href="mailto:bach.hv10@gmail.com">bach.hv10@gmail.com</a>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default ContactMeEmail
