import { motion, AnimatePresence } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom } from '@/utils/recoil'
import Constants from '@/utils/constants'
import { useWindowSize } from '@/hooks/screenSize'
import { useRouter } from '@/hooks/router'

const AboutMe = () => {
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const screenSize = useWindowSize()
  const router = useRouter()

  const navigateToContact = (event) => {
    event.stopPropagation()
    router.push('/contact')
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
                      I'm a software developer from Vietnam with a few years of web development
                      experience, I also studied Cloud Computing and AI during my post-graduate
                      college years, and cannot wait to try my skills on real projects!
                    </span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 py-6 text-base lg:text-lg gap-y-12 gap-x-12">
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      Web Development
                    </span>
                    <span className="leading-7">
                      My current go-to teck stack for most of my works usually consists of:{' '}
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
                      {' / '}
                      <span className="text-black inline-block font-semibold">
                        <img
                          src="./images/logo/nextjs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Next.js
                      </span>
                      {' and '}
                      <span className="text-white bg-gray-600 inline-block px-1.5 rounded-lg font-semibold">
                        Express.js
                      </span>
                      .
                      <br />
                      To improve myself in the mean time, I'm learning other languages, software
                      architecture design techniques, and ML/AI modelling as well.
                      <br />
                      <br />
                      Also, my passion also includes graphics design & 3D modelling, so I'm reading
                      up on{' '}
                      <span className="text-white bg-[#222222] inline-block px-1.5 rounded-lg font-semibold">
                        <img
                          src="./images/logo/threejs.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Three.js
                      </span>
                      , learning how to creates eye-catching 3D websites!
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                      DevOps & IT
                    </span>
                    <span className="leading-7">
                      After graduating with a Bachelor of IT and having a few years working as a
                      junior developer, I eventually got myself curious on how to deploy & manage
                      apps on the Internet. From there, I took a Cloud Computing course in college
                      and have been self-studying to learn more about DevOps.
                      <br />
                      <br />
                      While currently having little to no work experiences, I'm keeping myself
                      updated by learning{' '}
                      <span className="text-[#326ce5] inline-block font-semibold">
                        <img
                          src="./images/logo/kubernetes.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Kubernetes
                      </span>
                      {', '}
                      <span className="text-[#623ce4] inline-block font-semibold">
                        <img
                          src="./images/logo/terraform.svg"
                          width={24}
                          height={24}
                          alt="react"
                          className="inline"
                        />{' '}
                        Terraform
                      </span>
                      , etc.; and applying them to my personal softdev projects whenever possible.
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-start gap-y-4 mt-6 py-6 text-sm lg:text-base">
                  <span className="leading-7 text-xl lg:text-2xl font-title font-semibold">
                    Certifications 📃 I have achieved!
                    <span className="ml-2 italic text-xs lg:text-sm">
                      (and I'm still hungry for more 💪)
                    </span>
                  </span>
                  <span className="leading-7">
                    I enjoy continuously learning and improving my skills, which is why I actively
                    study for different certifications, varying from: cloud provider-specific,
                    networking, cybersecurity, etc. They help me stay current with new technologies
                    and grow confidently in my career. You can check out my certifications down
                    below:
                  </span>
                  <div className="flex flex-wrap justify-center gap-x-2 items-center">
                    <a href="https://www.credly.com/badges/25743ab2-ddd6-4187-865c-2b5eb5b1d5ac/public_url">
                      <img
                        src="/images/certifications/cisco-ccna.png"
                        alt="Cisco Certified Network Associate"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/42513a44-7f78-4062-a878-bd034b11639a/public_url">
                      <img
                        src="/images/certifications/isc2-cc.png"
                        alt="ISC2 Certified in Cybersecurity"
                        width="100"
                      />
                    </a>
                    <a href="https://learn.microsoft.com/en-us/users/bachha/credentials/b46f8687d4eb2af6">
                      <img
                        src="/images/certifications/microsoft-azure-fundamentals.png"
                        alt="Microsoft Azure Fundamentals"
                        width="100"
                      />
                    </a>
                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/BachHa/61CAC71264A1B02?sharingId=ED53CABF2080B677">
                      <img
                        src="/images/certifications/microsoft-365-admin-expert.png"
                        alt="Microsoft 365 Admin Expert"
                        width="100"
                      />
                    </a>
                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/BachHa/596373B87AA164E0?sharingId=ED53CABF2080B677">
                      <img
                        src="/images/certifications/microsoft-identity-and-access-admin-associate.png"
                        alt="Microsoft Identity and Access Admin Associate"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/a1eb00a0-cf97-44a7-8f82-3729849db352/public_url">
                      <img
                        src="/images/certifications/aws-certified-solutions-architect-associate.png"
                        alt="AWS Solutions Architect Associate"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/4538b70e-d7da-4c76-b98a-0c311e7279ea/public_url">
                      <img
                        src="/images/certifications/aws-certified-developer-associate.png"
                        alt="AWS Developer Associate"
                        width="100"
                      />
                    </a>
                    <a href="https://www.credly.com/badges/a87b2ce2-6f95-4202-8701-9af0a3cb757b/public_url">
                      <img
                        src="/images/certifications/aws-certified-cloud-practitioner.png"
                        alt="AWS Cloud Practitioner"
                        width="100"
                      />
                    </a>
                    <a href="https://threejs-journey.com/certificate/view/25280">
                      <img
                        src="/images/certifications/threejs-journey.png"
                        alt="Three.js Journey"
                        width="100"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:w-4/5 gap-y-4 mt-6 py-6 text-sm lg:text-base text-center">
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
