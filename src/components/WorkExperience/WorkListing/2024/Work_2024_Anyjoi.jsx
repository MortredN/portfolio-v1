const Work_2024_Anyjoi = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-20">
      <div className="flex items-center justify-center mx-4 lg:mx-16 h-[160px] bg-coffee-6 text-center">
        <h1 className="text-coffee-0 font-title font-bold tracking-wider text-[40px] lg:text-[48px] leading-[44px]">
          ANYJOI
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
            <span>2024 - Now</span>
            <span>Web Developer</span>
          </div>
        </div>
        <a
          className="group transition-colors duration-300 mt-2 lg:mt-0 ml-auto lg:ml-24 hover:text-coffee-6 text-sm lg:text-2xl w-fit lg:w-auto"
          href="https://anyjoi.com/"
          target="_blank"
        >
          Visit site ↗
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-coffee-6"></span>
        </a>
      </div>
      <i className="flex flex-col mt-8 mx-4 lg:mx-16 lg:text-lg">
        A social media profile thats a fully customized Link-in-Bio to drive conversion aka the
        easiest way to make money online. Be yourself, discover videos, creators, brands, products &
        services from around the world, create your own, distribute it to your other favourite
        platforms like TikTok or YouTube Shorts and start monetizing instantly. For this project, I
        developed the web frontend side and supported with the REST APIs of the application.
      </i>
      <div className="flex flex-col mt-8 mx-4 lg:mx-8 gap-y-4 lg:gap-y-8">
        <div className="flex">
          <img src="/images/works/2024/anyjoi/desktop-1.jpg" />
        </div>
        <div className="grid lg:grid-cols-3 w-full gap-4 lg:gap-8 px-8 lg:px-0">
          <img className="w-full" src="/images/works/2024/anyjoi/mobile-1.png" />
          <img className="w-full" src="/images/works/2024/anyjoi/mobile-2.png" />
          <img className="w-full" src="/images/works/2024/anyjoi/mobile-3.png" />
        </div>
      </div>
    </div>
  )
}
export default Work_2024_Anyjoi
