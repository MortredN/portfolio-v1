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
            className="absolute inset-y-0 right-0 h-full flex items-center justify-center"
            style={{ width: screenSize.width >= 1024 ? `60%` : `100%` }}
          >
            <div className="h-screen overflow-y-auto relative bg-[#EEEEEED9]">
              <div className="pt-8 pb-16 px-4 lg:px-8 tracking-wide h-full overflow-y-auto flex flex-col items-center">
                <h1 className="text-[32px] lg:text-[40px] text-center font-bold font-title tracking-wider mb-6">
                  About me
                </h1>
                <div className="flex py-6 text-base lg:text-lg">
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Hey there! I'm Bach 👋
                    </span>
                    <span className="leading-7">
                      I'm a software developer from Vietnam who loves tinkering with web
                      technologies, whether they are web frameworks, 3D rendering, or cloud
                      integrations!
                    </span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 py-6 text-base lg:text-lg gap-y-12 gap-x-12">
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Web Development
                    </span>
                    <span className="leading-7">
                      I'm most familiar with frontend web works, usually equipped with{' '}
                      <span className="text-[#3B82F6] inline-block font-semibold">
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
                      <span className="text-black inline-block font-semibold">
                        <img
                          src="./images/logo/nextjs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Next.js
                      </span>{' '}
                      as my go-to toolboxes. I can also work with backend REST APIs using{' '}
                      <span className="text-white bg-gray-700 inline-block px-1.5 rounded-lg font-semibold">
                        <img
                          src="./images/logo/expressjs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline -translate-y-px"
                        />{' '}
                        Express.js
                      </span>{' '}
                      to create full-stack projects if needed.
                      <br />
                      And I really adore 3D modelling and want to put them in eye-catching websites
                      using{' '}
                      <span className="text-white bg-emerald-700 inline-block px-1.5 rounded-lg font-semibold">
                        <img
                          src="./images/logo/threejs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Three.js
                      </span>
                      !
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Cloud / DevOps
                    </span>
                    <span className="leading-7">
                      When I worked as a junior developer, I often asked myself how to deploy apps
                      to the web. From there, I have been indulging myself with cloud tech, from
                      services for software development 💻 to system administration 🔧.
                      <br />
                      While currently having little work experiences, I have been honing my
                      skillsets by passing multiple{' '}
                      <span className="text-gray-800 font-semibold">
                        <span className="text-white bg-[#ed7100] inline-block px-1.5 rounded-lg font-semibold">
                          <img
                            src="./images/logo/aws.svg"
                            width={24}
                            height={24}
                            alt="react"
                            className="inline"
                          />{' '}
                          AWS
                        </span>
                        {' and '}
                        <span className=" bg-[#f3f3f3] inline-block px-1.5 rounded-lg">
                          <img
                            src="./images/logo/microsoft.svg"
                            width={24}
                            height={24}
                            alt="react"
                            className="inline"
                          />{' '}
                          Microsoft
                        </span>{' '}
                        certifications
                      </span>
                      , and apply the knowledge to my personal projects.
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start gap-y-4 mt-6 py-6 text-sm lg:text-base">
                  <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                    Certifications 📃 I have achieved!
                    <span className='ml-2 italic text-xs lg:text-sm'>(And many more to come...)</span>
                  </span>
                  <div className="grid grid-cols-4 lg:grid-cols-8 items-center">
                    <a href="https://www.credly.com/badges/a87b2ce2-6f95-4202-8701-9af0a3cb757b/public_url">
                      <img
                        src="/images/certifications/aws-certified-cloud-practitioner.png"
                        alt="drawing"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/4538b70e-d7da-4c76-b98a-0c311e7279ea/public_url">
                      <img
                        src="/images/certifications/aws-certified-developer-associate.png"
                        alt="drawing"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/a1eb00a0-cf97-44a7-8f82-3729849db352/public_url">
                      <img
                        src="/images/certifications/aws-certified-solutions-architect-associate.png"
                        alt="drawing"
                        width="100"
                      />
                    </a>
                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/BachHa/596373B87AA164E0?sharingId=ED53CABF2080B677">
                      <img
                        src="/images/certifications/microsoft-identity-and-access-admin-associate.png"
                        alt="drawing"
                        width="100"
                      />
                    </a>
                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/BachHa/61CAC71264A1B02?sharingId=ED53CABF2080B677">
                      <img
                        src="/images/certifications/microsoft-365-admin-expert.png"
                        alt="drawing"
                        width="100"
                      />
                    </a>
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
