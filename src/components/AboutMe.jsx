import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'
import { useWindowSize } from '../hooks/screenSize'

const AboutMe = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const screenSize = useWindowSize()

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE1 && (
          <motion.div
            initial={{ opacity: 0, translate: `50vw` }}
            animate={{ opacity: 1, translate: 0 }}
            exit={{ opacity: 0, translate: `50vw` }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-0 right-0 h-full flex items-center justify-center"
            style={{ width: screenSize.width >= 1024 ? `50%` : `100%` }}
          >
            <div className="relative bg-white/80 w-full h-full">
              <div className="pt-8 pb-20 lg:pt-16 lg:pb-16 px-4 lg:px-32 tracking-wide h-full overflow-y-auto flex flex-col items-center justify-start lg:justify-center">
                <h1 className="text-[32px] text-center font-bold font-title">About me</h1>
                <div className="flex flex-col gap-y-3 py-4 -mb-0.5">
                  <span className="leading-7">Hey there! 👋</span>
                  <span className="leading-7">
                    My name is Bach, and I'm a web developer from Vietnam. I have a few years of web
                    front-end working experiences, and I love working in a collaborative
                    environment! 🚀
                  </span>
                  <span className="leading-7">
                    I'm passionate about both old-school and newly-developed technologies, mainly on
                    web and interface design. I'm also interested in Cloud and DevOps as well. 📚
                  </span>
                  <span className="leading-7">Anyway, welcome to my portfolio!</span>
                </div>
                <div className="py-4 border-t-2 mx-4 border-dashed border-black mt-4 flex flex-col items-center">
                  <h2 className="text-xl text-center font-bold font-title tracking-wide">Skills</h2>
                  <div className="mt-4 flex gap-x-3 font-semibold">
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
                  <div className="mt-3 flex gap-x-3 font-semibold">
                    <span className="flex items-center justify-center gap-x-1">
                      <img src="./images/logo/aws.svg" width={24} height={24} />
                      <span>AWS</span>
                    </span>
                  </div>
                  <div className="mt-4 text-center text-sm italic">...and many more to come.</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-[100%] h-full w-[300px] bg-white/80"></div>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default AboutMe
