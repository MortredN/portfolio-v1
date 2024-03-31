const Work_2024_StudentSpace = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-4 lg:pb-8">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          STUDENTSPACE
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
            <span>StudentSpace</span>
            <span>2024</span>
            <span>Back-end Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-8 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-xl lg:text-2xl w-fit lg:w-auto"
          href="https://github.com/MortredN/StudentSpace"
          target="_blank"
        >
          Visit GitHub repo ↗
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        Seneca Polytechnic 2024 Housing Hackathon - Finalist
        <br />A demo qualified to the final round, showcasing how the application can assist
        international students in making better decisions when choosing accommodations in Canada.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="https://i.imgur.com/ETRMMhj.jpg" />
        </div>
        <div className="flex">
          <img src="https://i.imgur.com/2GWwfNs.jpg" />
        </div>
        <div className="flex">
          <img src="https://i.imgur.com/IsQNzmJ.jpg" />
        </div>
      </div>
    </div>
  )
}
export default Work_2024_StudentSpace
