import { RecoilRoot } from 'recoil'
import ThreeCanvas from './components/ThreeCanvas'
import OverlayMug from './components/LoadingScreen/OverlayMug'
import OverlayFilling from './components/LoadingScreen/OverlayFilling'
import AboutMe from './components/AboutMe'
import ContactMeEmail from './components/ContactMeEmail'
import Navbar from './components/Navbar'
import NameTitle from './components/NameTitle'
import FirstTimeLoading from './components/LoadingScreen/FirstTimeLoading'

const App = () => {
  return (
    <RecoilRoot>
      <ThreeCanvas />

      <FirstTimeLoading />
      <NameTitle />

      <AboutMe />
      <ContactMeEmail />

      <Navbar />

      <OverlayMug />
      <OverlayFilling />
    </RecoilRoot>
  )
}

export default App
