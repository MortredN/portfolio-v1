import { useRecoilState } from 'recoil'
import { cameraNameAtom, cameraNameSwapAtom, firstTimeLoadingEndAtom } from '../utils/recoil'
import Constants from '../utils/constants'

const NameTitle = () => {
  const [firstTimeLoadingEnd] = useRecoilState(firstTimeLoadingEndAtom)
  const [cameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  return cameraName === Constants.CAMERA_NAMES.ORTHOGRAPHIC && cameraName === cameraNameSwap ? (
    <div
      className={`absolute inset-x-0 px-4 mx-auto font-title flex flex-col items-center transition-all duration-1000 z-50 ${
        firstTimeLoadingEnd ? `text-base` : `text-white`
      }`}
      style={{
        top: firstTimeLoadingEnd ? `85vh` : `90vh`,
        transform: firstTimeLoadingEnd ? `translateX(-400px)` : ``
      }}
    >
      <h1 className="text-[40px] leading-[40px] font-bold flex items-center gap-x-3">
        <span>Bach Viet Ha</span>
      </h1>
      <span
        className={`text-xl leading-6 font-normal mt-2 transition-opacity ${
          firstTimeLoadingEnd ? `opacity-100` : `opacity-0`
        }`}
      >
        Software Developer
      </span>
    </div>
  ) : null
}
export default NameTitle
