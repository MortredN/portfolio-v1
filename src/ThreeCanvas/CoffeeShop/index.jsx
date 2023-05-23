import { useGLTF } from '@react-three/drei'
import Platform from './Platform'
import Bookshelf from './Bookshelf'
import Wallshelf from './Wallshelf'
import WorkingTable from './WorkingTable'
import CoffeeStand from './CoffeeStand'
import Clock from './Clock'

const CoffeeShop = () => {
  const { nodes, materials } = useGLTF('./models/coffeeshop.glb')

  return (
    <group dispose={null} position-y={-2}>
      <group name="Scene">
        <Platform nodes={nodes} materials={materials} />
        <Bookshelf nodes={nodes} materials={materials} />
        <Wallshelf nodes={nodes} materials={materials} />
        <WorkingTable nodes={nodes} materials={materials} />
        <CoffeeStand nodes={nodes} materials={materials} />
        <Clock nodes={nodes} materials={materials} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/coffeeshop.glb')

export default CoffeeShop
