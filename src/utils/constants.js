const Constants = {
  CAMERA_NAMES: {
    ORTHOGRAPHIC: `ortho`,
    PERSPECTIVE1: `persp1`,
    PERSPECTIVE2: `persp2`,
    PERSPECTIVE3: `persp3`
  },

  PERSPECTIVE_CAMERA_PROPERTIES: {
    CAM1: {
      position: { x: 0.7, y: 2, z: 4 },
      rotation: { x: -0.37, y: 0.87, z: 0.29 }
    },
    CAM2: {
      position: { x: 2.2, y: 0.3, z: 0.1 },
      rotation: { x: Math.PI * -0.38, y: Math.PI * 0.41, z: Math.PI * 0.38 }
    },
    CAM3: {
      position: { x: 4, y: -0.7, z: -0.8 },
      rotation: { x: 0, y: Math.PI * 0.15, z: 0 }
    }
  }
}

export default Constants
