import { RecoilRoot } from 'recoil'
import { useEffect } from 'react'
import { useWindowSize } from './hooks/screenSize'
import ThreeCanvas from './components/ThreeCanvas'
import OverlayMug from './components/LoadingScreen/OverlayMug'
import OverlayFilling from './components/LoadingScreen/OverlayFilling'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import NameTitle from './components/NameTitle'
import FirstTimeLoading from './components/LoadingScreen/FirstTimeLoading'
import MediaPlayer from './components/MediaPlayer'
import WorkExperienceMobile from './components/WorkExperience/WorkExperienceMobile'
import WorkDrawer from './components/WorkExperience/WorkDrawer'
import ResumePopup from './components/ResumePopup'

const App = () => {
  const windowSize = useWindowSize()

  return (
    <RecoilRoot>
      <ThreeCanvas />

      <FirstTimeLoading />
      <NameTitle />

      <AboutMe />
      <WorkExperienceMobile />
      <ResumePopup />

      <Navbar />
      <MediaPlayer />

      {windowSize.width < 1024 && <WorkDrawer />}

      <OverlayMug />
      <OverlayFilling />
    </RecoilRoot>
  )
}

export default App
