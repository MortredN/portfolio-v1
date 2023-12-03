import { useRecoilState } from 'recoil'
import { displayedWorkAtom } from '../../utils/recoil'
import Experiences from '../../utils/experiences'
import Works from '../../utils/works'
import WorkDrawer from './WorkDrawer'
import { useWindowSize } from '../../hooks/screenSize'

const WorkExperience = () => {
  const [displayedWork, setDisplayedWork] = useRecoilState(displayedWorkAtom)
  const windowSize = useWindowSize()

  return (
    <>
      {windowSize.width >= 1024 && <WorkDrawer />}
      <div className="overflow-y-auto bg-screen w-full h-full custom-scrollbar">
        <div className="pt-20 pb-20 lg:pt-4 lg:pb-12 px-4 lg:px-12 flex flex-col justify-start lg:justify-center gap-y-12">
          <div className="flex py-6 text-base !text-white lg:text-lg flex-col w-full">
            <h2 className="leading-7 text-[32px] lg:text-[40px] font-title font-semibold">
              Experiences
            </h2>
            <div className="bg-white/50 w-full h-px mt-1 mb-12" />
            <div className="flex flex-col w-full gap-y-6">
              {Experiences.map((experience) => (
                <div key={experience.company} className="flex flex-col gap-y-6 leading-7">
                  <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row lg:gap-x-1">
                      <span className="font-bold text-lg lg:text-xl">{experience.job}</span>
                      <span className="font-bold text-lg lg:text-xl">
                        <span className="!text-white/75"> at </span>
                        <a
                          href={experience.url}
                          target="_blank"
                          className="underline cursor-pointer hover:text-coffee-1 transition-colors"
                        >
                          {experience.company}
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-x-1 mt-2">
                      <span className="text-coffee-5 bg-white px-1">{experience.from}</span>
                      <span>&gt;</span>
                      <span className="text-coffee-5 bg-white px-1">{experience.to}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex py-6 text-base !text-white lg:text-lg flex-col w-full">
            <h2 className="leading-7 text-[32px] lg:text-[40px] font-title font-semibold">Works</h2>
            <div className="bg-white/50 w-full h-px mt-1 mb-12" />
            <div className="flex flex-col-reverse gap-y-12">
              {Object.entries(Works).map(([year, work]) => (
                <div className="flex flex-col items-start gap-y-4" key={year}>
                  <h2 className="leading-7 text-2xl lg:text-[32px] font-title font-semibold py-1 px-2 lg:py-1.5 lg:px-2.5 bg-white text-coffee-6">
                    {year}
                  </h2>
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                    {Object.entries(work).map(([key, value]) => (
                      <button
                        onClick={() => setDisplayedWork(value.name)}
                        className="w-full bg-coffee-0 hover:scale-[110%] transition-transform duration-500"
                        style={{ aspectRatio: `1` }}
                        key={key}
                      >
                        <img src={value.thumbnail} className="w-full h-full object-contain" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkExperience
