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
        <div className="py-20 lg:py-8 px-4 lg:px-12 flex flex-col justify-start lg:justify-center gap-y-8 lg:gap-y-12">
          <div className="flex py-6 text-base !text-white lg:text-lg flex-col w-full">
            <h2 className="leading-7 text-[32px] lg:text-[40px] font-title font-semibold">
              Experiences
            </h2>
            <div className="bg-white/50 w-full h-px mt-1 mb-8 lg:mb-12" />
            <div className="flex flex-col w-full gap-y-6">
              {Experiences.map((experience) => (
                <div key={experience.company} className="flex flex-col gap-y-6 leading-7">
                  <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row lg:gap-x-1">
                      <span className="font-bold text-lg lg:text-xl">{experience.job}</span>
                      <span className="font-bold text-lg lg:text-xl">
                        <span className="!text-white/75"> at </span>
                        {experience.url ? (
                          <a
                            href={experience.url}
                            target="_blank"
                            className="underline cursor-pointer hover:text-coffee-1 transition-colors"
                          >
                            {experience.company}
                          </a>
                        ) : (
                          <span>{experience.company}</span>
                        )}
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
            <h2 className="leading-7 text-[32px] lg:text-[40px] font-title font-semibold">
              Works & Projects
            </h2>
            <div className="bg-white/50 w-full h-px mt-1 mb-8 lg:mb-12" />

            <div className="hidden lg:flex flex-row gap-y-12 gap-x-4 w-full flex-wrap">
              {Object.entries(Works).map(([year, work]) => {
                return Object.entries(work).map(([key, value], index) => (
                  <div
                    key={`${year}-${key}`}
                    className="flex flex-col items-start justify-end gap-y-4"
                  >
                    {index === 0 && (
                      <h2 className="leading-7 text-[32px] font-title font-semibold py-1.5 px-2.5 bg-white text-coffee-6">
                        {year.replace('Y', '')}
                      </h2>
                    )}
                    <button
                      onClick={() => setDisplayedWork(value.name)}
                      className="w-[200px] bg-coffee-0 hover:scale-[110%] transition-transform duration-500"
                      style={{ aspectRatio: `1` }}
                      key={key}
                    >
                      <img src={value.thumbnail} className="w-full h-full object-contain" />
                    </button>
                  </div>
                ))
              })}
            </div>

            <div className="flex lg:hidden flex-col gap-6 w-full flex-wrap">
              {Object.entries(Works).map(([year, work]) => (
                <div className="flex flex-col items-start gap-y-2" key={year}>
                  <h2 className="leading-7 text-2xl font-title font-semibold py-1 px-2 bg-white text-coffee-6">
                    {year.replace('Y', '')}
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(work).map(([key, value]) => (
                      <button
                        onClick={() => setDisplayedWork(value.name)}
                        className="bg-coffee-0 hover:scale-[110%] transition-transform duration-500"
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
