import { RecoilRoot } from 'recoil'
import ThreeCanvas from './components/ThreeCanvas'
import OverlayMug from './components/LoadingScreen/OverlayMug'
import OverlayFilling from './components/LoadingScreen/OverlayFilling'
import CameraSwitch from './components/CameraSwitch'

const App = () => {
  return (
    <RecoilRoot>
      <ThreeCanvas />
      <CameraSwitch />
      <OverlayMug />
      <OverlayFilling />
    </RecoilRoot>
  )
}

export default App
