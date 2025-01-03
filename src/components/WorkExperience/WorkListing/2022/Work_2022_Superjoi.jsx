const Work_2022_Superjoi = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-4 lg:pb-8">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          SUPERJOI
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 mx-4 lg:mx-16 lg:items-center">
        <div className="flex lg:text-lg">
          <div className="flex flex-col font-semibold gap-y-1">
            <span>Client:</span>
            <span>Year:</span>
            <span>Role:</span>
          </div>
          <div className="flex flex-col gap-y-1 ml-4 lg:ml-8">
            <span>Superjoi</span>
            <span>2022 - 2023</span>
            <span>Web Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-8 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-base lg:text-2xl w-fit lg:w-auto"
          href="https://superjoi.com/"
          target="_blank"
        >
          Visit site ↗
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        Superjoi enables creators to get funded, co-create content and reward their superfans - all
        in one platform! For this project, I developed the web frontend side and supported with the
        REST APIs of the application.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="/images/works/2022/superjoi/desktop-1.jpg" />
        </div>
        <div className="flex">
          <img src="/images/works/2022/superjoi/desktop-2.jpg" />
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-4 lg:gap-8 px-8 lg:px-0">
          <img className="w-full" src="/images/works/2022/superjoi/mobile-1.jpg" />
          <img className="w-full" src="/images/works/2022/superjoi/mobile-2.jpg" />
          <img className="w-full" src="/images/works/2022/superjoi/mobile-3.jpg" />
        </div>
      </div>
    </div>
  )
}
export default Work_2022_Superjoi
