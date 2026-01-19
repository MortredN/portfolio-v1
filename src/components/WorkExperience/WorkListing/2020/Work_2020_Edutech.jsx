const Work_2020_Edutech = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-20">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          EDUTECH CONSULTING
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
            <span>EdutechConsulting</span>
            <span>2020</span>
            <span>Designer, Web Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-2 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-sm lg:text-2xl w-fit lg:w-auto"
          href="https://www.edutechconsulting.com.au/"
          target="_blank"
        >
          Visit site ↗
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        EduTech has delivered the technical savvy and IT solutions that help businesses achieve
        strategic goals. A Sydney based IT consulting company, EduTech office is in the central part
        of the CBD in Sydney. For this project, I redesigned and developed the UI of the home
        website.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="/images/works/2020/edutech/desktop-1.jpg" />
        </div>
        <div className="flex">
          <img src="/images/works/2020/edutech/desktop-2.jpg" />
        </div>
        <div className="flex">
          <img src="/images/works/2020/edutech/desktop-3.jpg" />
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-4 lg:gap-8 px-8 lg:px-0">
          <img className="w-full" src="/images/works/2020/edutech/mobile-1.jpg" />
          <img className="w-full" src="/images/works/2020/edutech/mobile-2.jpg" />
          <img className="w-full" src="/images/works/2020/edutech/mobile-3.jpg" />
        </div>
      </div>
    </div>
  )
}
export default Work_2020_Edutech
