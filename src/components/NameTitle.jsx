import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom, firstTimeLoadingEndAtom } from '../utils/recoil'
import Constants from '../utils/constants'
import { useWindowSize } from '../hooks/screenSize'

const NameTitle = () => {
  const [firstTimeLoadingEnd] = useRecoilState(firstTimeLoadingEndAtom)
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const windowSize = useWindowSize()

  return cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap ? (
    <div
      className={`absolute inset-x-0 px-4 mx-auto font-title flex flex-col items-center transition-all duration-1000 z-50 ${
        firstTimeLoadingEnd ? `text-base` : `text-white`
      }`}
      style={{
        top:
          windowSize.width >= 1024
            ? firstTimeLoadingEnd
              ? `85dvh`
              : `90dvh`
            : firstTimeLoadingEnd
            ? `80dvh`
            : `85dvh`,
        transform:
          firstTimeLoadingEnd && (windowSize.width >= 1024 || windowSize.width >= windowSize.height)
            ? `translateX(-${Math.sqrt(windowSize.width / 1920 * 1.2) * 350}px)`
            : ``
      }}
    >
      <h1
        className={`${
          windowSize.width >= 1024 ? `text-[40px] leading-[40px]` : `text-[32px] leading-[32px]`
        } font-bold flex items-center gap-x-3`}
      >
        <span>Bach Viet Ha</span>
      </h1>
      <span
        className={`${
          windowSize.width >= 1024 ? `text-lg leading-6` : `text-base leading-5`
        } font-normal mt-2 transition-opacity ${firstTimeLoadingEnd ? `opacity-100` : `opacity-0`}`}
      >
        Software Developer
      </span>
    </div>
  ) : null
}
export default NameTitle
