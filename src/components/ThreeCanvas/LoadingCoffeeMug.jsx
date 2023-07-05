import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useRecoilState } from 'recoil'
import Constants from '../../utils/constants'
import { cameraNameSwapAtom } from '../../utils/recoil'
import { usePrevCamera } from '../../hooks/camera'

const LoadingCoffeeMug = (props) => {
  const { nodes, materials, wholeRef } = props
  const [cameraNameSwap] = useRecoilState(cameraNameSwapAtom)
  const prevCamera = usePrevCamera(cameraNameSwap)
  const loadingCoffeeMugRef = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (
        cameraNameSwap !== Constants.CAMERA_NAMES.ORTHOGRAPHIC &&
        prevCamera === Constants.CAMERA_NAMES.ORTHOGRAPHIC
      ) {
        loadingCoffeeMugRef.current.visible = true
        gsap.to(loadingCoffeeMugRef.current.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: Constants.CAMERA_SWAP_LOADING_TIME
        })
        gsap.to(loadingCoffeeMugRef.current.scale, {
          x: 150,
          y: 150,
          z: 150,
          duration: Constants.CAMERA_SWAP_LOADING_TIME
        })
        gsap.to(loadingCoffeeMugRef.current.rotation, {
          x: Math.PI * 0.5,
          duration: Constants.CAMERA_SWAP_LOADING_TIME
        })
        setTimeout(
          () => (loadingCoffeeMugRef.current.visible = false),
          Constants.CAMERA_SWAP_LOADING_TIME * 1000
        )
      }
    }, wholeRef)

    return () => ctx.revert()
  }, [cameraNameSwap])

  return (
    <group
      ref={loadingCoffeeMugRef}
      position={[1.375, -0.6, 0.5]}
      rotation={[0, Math.PI * -0.25, 0]}
      scale={2}
      visible={false}
    >
      <mesh
        geometry={nodes.MugTable.geometry}
        material={materials.Cup}
        rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        scale={2}
      />
      <mesh
        geometry={nodes.MugTableCoffee.geometry}
        material={materials.MugCoffee}
        position={[0, 0.16, 0]}
        scale={0.12}
      />
    </group>
  )
}
export default LoadingCoffeeMug
