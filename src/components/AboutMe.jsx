import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'
import Constants from '../utils/constants'
import { useWindowSize } from '../hooks/screenSize'

const AboutMe = () => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const screenSize = useWindowSize()

  const navigateToContact = (event) => {
    event.stopPropagation()
    setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)
    setCameraNameSwap(Constants.CAMERA_NAMES.PERSPECTIVE3)
  }

  return (
    <AnimatePresence>
      {cameraName === Constants.CAMERA_NAMES.PERSPECTIVE1 &&
        cameraNameSwap === Constants.CAMERA_NAMES.PERSPECTIVE1 && (
          <motion.div
            initial={{ opacity: 0, translate: `60vw` }}
            animate={{ opacity: 1, translate: 0 }}
            exit={{ opacity: 0, translate: `60vw` }}
            transition={{ duration: 1, ease: 'anticipate' }}
            className="absolute top-0 right-0 h-full flex items-center justify-center"
            style={{ width: screenSize.width >= 1024 ? `60%` : `100%` }}
          >
            <div className="relative bg-[#EEEEEED9] w-full h-full">
              <div className="pt-8 pb-20 lg:pt-16 lg:pb-16 px-4 lg:px-16 tracking-wide h-full overflow-y-auto flex flex-col items-center justify-start lg:justify-center">
                <h1 className="text-[32px] lg:text-[40px] text-center font-bold font-title tracking-wider mb-6">
                  About me
                </h1>
                <div className="flex py-6 text-base lg:text-lg">
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Hey there! I'm Bach 👋
                    </span>
                    <span className="leading-7">
                      I'm a software developer from Vietnam specialized in web, with a few years of
                      working experiences in both in-office and remote jobs
                    </span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 py-6 text-base lg:text-lg gap-y-12 gap-x-12 lg:pb-32">
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Software Developer
                    </span>
                    <span className="leading-7">
                      When working on JavaScript applications with ease of collaboration and
                      maintainability, I'm usually equipped with{' '}
                      <span className="text-[#3B82F6] inline-block">
                        <img
                          src="./images/logo/react.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        React
                      </span>
                      {' and '}
                      <span className="text-black inline-block">
                        <img
                          src="./images/logo/nextjs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Next.js
                      </span>{' '}
                      as my trusty frontend friends.
                      <br />I also love 3D modelling and putting them in eye-catching websites using{' '}
                      <span className="text-white bg-black/75 inline-block py-0.5 px-1.5 rounded-lg">
                        <img
                          src="./images/logo/threejs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Three.js
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3 lg:translate-y-32">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      DevOps Engineer
                    </span>
                    <span className="leading-7">
                      As a developer, I simply value saving my team's application development time.
                      While currently having little work experiences, I have been honing myself by
                      achieving multiple{' '}
                      <span className="text-[#222f3f] inline-block">
                        <img
                          src="./images/logo/aws.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        certifications
                      </span>{' '}
                      (AWS), and apply the knowledge to my personal projects.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:w-4/5 gap-y-4 mt-6 py-6 text-sm lg:text-base text-center">
                  <span className="leading-7">
                    <i>
                      This is just the beginning of my journey, there will be a lot more of
                      surprises!
                    </i>
                    <br />
                    And I hope that we can work together!
                  </span>
                  <button
                    onClick={navigateToContact}
                    className="py-2 px-4 rounded-full border border-base hover:bg-coffee-3 hover:border-coffee-3 hover:text-white transition-colors"
                  >
                    Contact me
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-[100%] h-full w-[300px] bg-white/80" />
          </motion.div>
        )}
    </AnimatePresence>
  )
}
export default AboutMe
