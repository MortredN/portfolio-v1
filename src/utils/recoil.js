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

export const firstTimeLoadingEndAtom = atom({
  key: 'firstTimeLoadingEndAtom',
  default: false
})

export const openMediaPlayerAtom = atom({
  key: 'openMediaPlayerAtom',
  default: false
})

export const displayedWorkAtom = atom({
  key: 'displayedWorkAtom',
  default: null
})
