import { RecoilRoot } from 'recoil'
import ThreeCanvas from './components/ThreeCanvas'
import OverlayMug from './components/LoadingScreen/OverlayMug'
import OverlayFilling from './components/LoadingScreen/OverlayFilling'
import CameraSwitch from './components/CameraSwitch'
import AboutMe from './components/AboutMe'
import ContactMeEmail from './components/ContactMeEmail'

const App = () => {
  return (
    <RecoilRoot>
      <ThreeCanvas />

      <AboutMe />
      <ContactMeEmail />

      <CameraSwitch />
      <OverlayMug />
      <OverlayFilling />
    </RecoilRoot>
  )
}

export default App
