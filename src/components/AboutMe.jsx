import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'

const AboutMe = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const paperSound = new Audio('./sounds/paper.mp3')

  const playPaperSound = (definition) => {
    if (definition?.opacity) {
      paperSound.volume = 0.5
      setTimeout(() => {
        paperSound.play()
      }, 150)
    }
  }

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE1 && (
          <motion.div
            initial={{ opacity: 0, translate: `-50vw 150vh`, rotate: -150 }}
            animate={{ opacity: 1, translate: 0, rotate: 0 }}
            exit={{ opacity: 0, translate: `-50vw 150vh`, rotate: -150 }}
            onAnimationStart={playPaperSound}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-0 h-full flex items-center justify-center"
            style={{ width: 600, left: `10vw` }}
          >
            <div className="relative">
              <img
                src="./images/sticky_note.png"
                className="w-full h-full object-contain opacity-95"
              />
              <div className="absolute top-0 w-full h-full p-24 tracking-wide">
                <div className="overflow-y-auto">
                  <h1 className="text-[32px] text-center font-bold font-title">About me</h1>
                  <div className="flex flex-col gap-y-3 py-4 -mb-0.5">
                    <span className="leading-7">Hi there! 👋</span>
                    <span className="leading-7">
                      My name is Bach Viet Ha, and I'm a web developer based in Vietnam. I have a
                      few years of web front-end working experiences, and I love working in a
                      collaborative environment! 🚀
                    </span>
                    <span className="leading-7">
                      I'm passionate about both old-school and cutting-edge technologies, but mainly
                      focused on web and interface design. Currently, I'm also interested in Cloud
                      and DevOps as well. 📚
                    </span>
                    <span className="leading-7">Anyway, welcome to my portfolio!</span>
                  </div>
                  <div className="py-4 border-t-2 mx-4 border-dashed border-black">
                    <h2 className="text-xl text-center font-semibold font-title tracking-wide">
                      Main Skills
                    </h2>
                    <div className="mt-4 grid grid-cols-3 gap-2 font-medium">
                      <span className="flex items-center justify-center gap-x-1">
                        <img src="./images/logo/react.svg" width={24} height={24} />
                        <span>React</span>
                      </span>
                      <span className="flex items-center justify-center gap-x-1">
                        <img src="./images/logo/nextjs.svg" width={24} height={24} />
                        <span>Next.js</span>
                      </span>
                      <span className="flex items-center justify-center gap-x-1">
                        <img src="./images/logo/threejs.svg" width={24} height={24} />
                        <span>Three.js</span>
                      </span>
                    </div>
                    <div className="mt-4 text-center text-sm italic">...and many more to come.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default AboutMe
