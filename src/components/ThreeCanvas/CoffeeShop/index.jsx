import { useGLTF } from '@react-three/drei'
import Platform from './Platform'
import Bookshelf from './Bookshelf'
import Wallshelf from './Wallshelf'
import WorkingTable from './WorkingTable'
import CoffeeStand from './CoffeeStand'
import Clock from './Clock'

const CoffeeShop = () => {
  const { nodes, materials } = useGLTF('./models/coffeeshop.glb')
  const gltfProps = { nodes, materials }

  return (
    <group dispose={null} position-y={-2}>
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
