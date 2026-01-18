import { useWindowSize } from '@/hooks/screenSize'
import ThreeCanvas from './ThreeCanvas'
import OverlayMug from './LoadingScreen/OverlayMug'
import OverlayFilling from './LoadingScreen/OverlayFilling'
import AboutMe from './AboutMe'
import Navbar from './Navbar'
import NameTitle from './NameTitle'
import FirstTimeLoading from './LoadingScreen/FirstTimeLoading'
import MediaPlayer from './MediaPlayer'
import WorkExperienceMobile from './WorkExperience/WorkExperienceMobile'
import WorkDrawer from './WorkExperience/WorkDrawer'
import ResumePopup from './ResumePopup'

const MainContent = () => {
  const windowSize = useWindowSize()

  return (
    <>
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
    </>
  )
}
export default MainContent
