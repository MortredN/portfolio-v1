import { useWindowSize } from '../../hooks/screenSize'

const FirstTimeLoadingCircle = ({ active, progress }) => {
  const windowSize = useWindowSize()

  return (
    <>
      <div
        className="absolute flex items-center justify-center rounded-full transition-all duration-500"
        style={{
          background: `conic-gradient(var(--coffee-0) ${progress ?? 0}%, var(--coffee-3) ${
            progress ?? 0
          }%)`,
          width: 200,
          height: 200,
          top: progress === 100 && !active ? `calc(50% - 100px)` : `50%`,
          left: progress === 100 && !active ? `calc(50% - 100px)` : `50%`,
          transform:
            progress === 100 && !active
              ? `scale(0) translate(-50%, -50%)`
              : `scale(1) translate(-50%, -50%)`
        }}
      >
        <div
          className="bg-coffee-3 rounded-full flex items-center justify-center text-white font-title font-extrabold text-[40px]"
          style={{ height: 180, width: 180 }}
        >
          {progress ? Math.round(progress) : 0} %
        </div>
      </div>
      <div
        className="absolute duration-1000 text-white font-semibold text-lg text-center"
        style={{
          top: progress === 100 && !active ? `50%` : `calc(50% - 100px)`,
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
