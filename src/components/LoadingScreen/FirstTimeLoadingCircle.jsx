import { useWindowSize } from '../../hooks/screenSize'

const FirstTimeLoadingCircle = ({ active, progress }) => {
  const windowSize = useWindowSize()

  return (
    <>
      <div
        className="absolute flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          background: `conic-gradient(#ffffff ${progress ?? 0}%, var(--coffee-3) ${
            progress ?? 0
          }%)`,
          width: 240,
          height: 240,
          top: `50%`,
          left: `50%`,
          transform: `translate(-50%, -50%)`
        }}
      >
        <div
          className="bg-coffee-3 rounded-full flex items-center justify-center text-white font-title font-extrabold text-[40px]"
          style={{ height: 212, width: 212 }}
        >
          <object
            type="image/svg+xml"
            data="./images/coffee_loading.svg"
            style={{ width: 140, transform: `translateX(4px)` }}
          >
            <img
              src="./images/coffee_loading.svg"
              style={{ width: 140, transform: `translateX(4px)` }}
            />
          </object>
        </div>
      </div>
      <div
        className="absolute duration-1000 text-white font-semibold text-lg lg:text-2xl text-center"
        style={{
          top: progress === 100 && !active ? `72.5%` : `calc(72.5% - 100px)`,
          left: progress === 100 && !active ? `50%` : `calc(50% - 100px)`,
          transform:
            progress === 100 && !active
              ? `scale(1) translate(-50%, -50%)`
              : `scale(0) translate(-50%, -50%)`
        }}
      >
        {windowSize?.width >= 1024 ? `Click` : `Press`} anywhere
        <br />
        to open
      </div>
    </>
  )
}
export default FirstTimeLoadingCircle
