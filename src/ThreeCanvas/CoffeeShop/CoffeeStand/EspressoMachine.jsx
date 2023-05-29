import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import hoverGlowFragmentShader from '../../shaders/hoverGlow/fragment.glsl'

const EspressoMachine = (props) => {
  const { nodes, materials } = props

  const hoverGlowRef = useRef()

  const hoverMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color('#21cfed') },
      uOpacity: { value: 0 }
    },
    fragmentShader: hoverGlowFragmentShader,
    transparent: true
  })

  const fadeIn = gsap.to(hoverMaterial.uniforms.uOpacity, {
    value: 0.4,
    ease: 'power2.inOut',
    duration: 1,
    repeat: -1,
    repeatDelay: 5
  })
  const fadeOut = gsap.to(hoverMaterial.uniforms.uOpacity, {
    value: 0,
    ease: 'power2.inOut',
    duration: 1,
    repeat: -1,
    repeatDelay: 5,
    delay: 1
  })

  const onMouseEnter = (event) => {
    event.stopPropagation()
    fadeIn.pause()
    fadeOut.pause()
    hoverMaterial.uniforms.uColor.value.set('#000000')
    document.body.style.cursor = 'pointer'
    gsap.fromTo(
      hoverMaterial.uniforms.uOpacity,
      { value: 0 },
      {
        value: 0.5,
        ease: 'power2.inOut',
        duration: 0.5
      }
    )
    gsap.to(hoverGlowRef.current.scale, {
      y: 0.85,
      ease: 'power2.inOut',
      duration: 0.5
    })
  }

  const onMouseLeave = (event) => {
    event.stopPropagation()
    hoverMaterial.uniforms.uColor.value.set('#21cfed')
    document.body.style.cursor = 'default'
    gsap.fromTo(
      hoverMaterial.uniforms.uOpacity,
      { value: 0.5 },
      {
        value: 0,
        ease: 'power2.inOut',
        duration: 0.5
      }
    )
    gsap.to(hoverGlowRef.current.scale, {
      y: 0.79,
      ease: 'power2.inOut',
      duration: 0.5
    })
    setTimeout(() => {
      fadeOut.restart(true)
      fadeIn.restart(true)
    }, 500)
  }

  return (
    <group position={[0.34, 1.99, -3.5]}>
      <group name="EspressoMachine" scale={0.78}>
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.MachineSteel}
        />
        <mesh
          name="Cube008_1"
          castShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Rubber}
        />
        <mesh
          name="Cube008_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials.TrashBin}
        />
      </group>
      <group
        ref={hoverGlowRef}
        name="EspressoMachineHoverGlow"
        onPointerEnter={onMouseEnter}
        onPointerLeave={onMouseLeave}
        scale={[0.785, 0.79, 0.785]}
        position={[0.01, 0, 0.01]}
      >
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={hoverMaterial} />
        <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={hoverMaterial} />
        <mesh name="Cube008_2" geometry={nodes.Cube008_2.geometry} material={hoverMaterial} />
      </group>
    </group>
  )
}
export default EspressoMachine
