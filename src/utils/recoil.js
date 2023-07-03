import { atom } from 'recoil'
import Constants from './constants'

export const cameraNameAtom = atom({
  key: 'cameraName',
  default: Constants.CAMERA_NAMES.ORTHOGRAPHIC
})

export const cameraNameSwapAtom = atom({
  key: 'cameraNameSwap',
  default: Constants.CAMERA_NAMES.ORTHOGRAPHIC
})
