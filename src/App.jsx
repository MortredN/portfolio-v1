import { RecoilRoot } from 'recoil'
import ThreeCanvas from './components/ThreeCanvas'
import OverlayMug from './components/LoadingScreen/OverlayMug'

const App = () => {
  return (
    <RecoilRoot>
      <ThreeCanvas />
      <OverlayMug />
    </RecoilRoot>
  )
}

export default App
