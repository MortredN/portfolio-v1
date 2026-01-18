import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router'
import MainContent from './components/MainContent'
import RouteRecoilSync from './components/RouteRecoilSync'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <RouteRecoilSync />
        <MainContent />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
