import { useGLTF } from '@react-three/drei'
import Platform from './Platform'
import Bookshelf from './Bookshelf'
import Wallshelf from './Wallshelf'
import WorkingTable from './WorkingTable'
import CoffeeStand from './CoffeeStand'
import Clock from './Clock'
import { useRecoilState } from 'recoil'
import { cameraNameAtom } from '../../../utils/recoil'
import Constants from '../../../utils/constants'

const CoffeeShop = () => {
  const { nodes, materials } = useGLTF('./models/coffeeshop.glb')
  const gltfProps = { nodes, materials }
  const [cameraName, setCameraName] = useRecoilState(cameraNameAtom)

  return (
    <group
      dispose={null}
      position-y={-2}
      onClick={(event) => {
        event.stopPropagation()
        setCameraName(Constants.CAMERA_NAMES.ORTHOGRAPHIC)
      }}
    >
      <group name="Scene">
        <Platform {...gltfProps} />
        <Bookshelf {...gltfProps} />
        <Wallshelf {...gltfProps} />
        <WorkingTable {...gltfProps} />
        <CoffeeStand {...gltfProps} />
        <Clock {...gltfProps} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/coffeeshop.glb')

export default CoffeeShop
