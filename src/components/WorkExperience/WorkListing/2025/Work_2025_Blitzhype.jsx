const Work_2025_Blitzhype = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-20">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          BLITZHYPE
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
            <span>Anyjoi</span>
            <span>2025 - Now</span>
            <span>Web Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-2 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-sm lg:text-2xl w-fit lg:w-auto"
          href="https://blitzhype.com/"
          target="_blank"
        >
          Visit site ↗
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        <b>Blitzhype is an Anyjoi's Brand & Sub-Service</b>
        Blitzhype is a creator-powered marketing & sales OS — that transforms creators into
        measurable, scalable, performance-driven ad systems, turning attention into tangible revenue
        for both brands and creators.
        <br />
        Helping brands, retailers & agencies get into scalable creator marketing & sales
        outperforming their performance marketing.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="/images/works/2025/blitzhype/desktop-1.png" />
        </div>
        <div className="flex">
          <img src="/images/works/2025/blitzhype/desktop-2.png" />
        </div>
        <div className="flex">
          <img src="/images/works/2025/blitzhype/desktop-3.png" />
        </div>
      </div>
    </div>
  )
}
export default Work_2025_Blitzhype
