const Work_2020_Edutech = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-4 lg:pb-8">
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
            <span>Designer, Front-end Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-8 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-xl lg:text-2xl w-fit lg:w-auto"
          href="https://www.edutechconsulting.com.au/"
          target="_blank"
        >
          Visit site ↗
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="https://i.imgur.com/6G2JM3W.jpg" />
        </div>
        <div className="flex">
          <img src="https://i.imgur.com/U4dF614.jpg" />
        </div>
        <div className="flex">
          <img src="https://i.imgur.com/jSG1r44.jpg" />
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-4 lg:gap-8">
          <img className="w-full" src="https://i.imgur.com/k30Irb3.jpg" />
          <img className="w-full" src="https://i.imgur.com/TCAIlZB.jpg" />
          <img className="w-full" src="https://i.imgur.com/PSk8g4D.jpg" />
        </div>
      </div>
    </div>
  )
}
export default Work_2020_Edutech
