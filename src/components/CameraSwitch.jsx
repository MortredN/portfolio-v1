import { useRecoilState } from 'recoil'
import Constants from '../utils/constants'
import { cameraNameAtom, cameraNameSwapAtom } from '../utils/recoil'

const CameraSwitch = () => {
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)
  const [cameraNameSwap, setCameraNameSwap] = useRecoilState(cameraNameSwapAtom)

  console.log('cn', cameraName)
  console.log('cns', cameraNameSwap)

  return cameraName !== Constants.CAMERA_NAMES.ORTHOGRAPHIC ? (
    <div className="fixed bottom-8 flex flex-col items-center justify-center w-full gap-y-4">
      <div className="flex items-center justify-center gap-x-6">
        <button
          type="button"
          onClick={() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE1)}
          className="w-6 h-6 flex items-center justify-center rounded-full border-white text-white font-medium bg-white/30"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE2)}
          className="w-6 h-6 flex items-center justify-center rounded-full border-white text-white font-medium bg-white/30"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => setCameraName(Constants.CAMERA_NAMES.PERSPECTIVE3)}
          className="w-6 h-6 flex items-center justify-center rounded-full border-white text-white font-medium bg-white/30"
        >
          3
        </button>
      </div>
      <button
        type="button"
        onClick={() => setCameraNameSwap(Constants.CAMERA_NAMES.ORTHOGRAPHIC)}
        className="w-8 h-8 flex items-center justify-center rounded-full border-white text-white font-medium bg-white/30 text-xl"
      >
        X
      </button>
    </div>
  ) : null
}
export default CameraSwitch
