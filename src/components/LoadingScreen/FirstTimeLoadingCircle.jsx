const FirstTimeLoadingCircle = ({ progress }) => {
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
    </>
  )
}
export default FirstTimeLoadingCircle
