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
      rotation: { x: -0.33, y: 1, z: 0.29 }
    },
    CAM2: {
      position: { x: 2.1, y: 0.2, z: 0.1 },
      rotation: { x: Math.PI * -0.38, y: Math.PI * 0.41, z: Math.PI * 0.38 }
    },
    CAM3: {
      position: { x: 4, y: -0.7, z: -0.5 },
      rotation: { x: 0, y: Math.PI * 0.15, z: 0 }
    }
  },

  CAMERA_SWAP_LOADING_TIME: 2,
  PERSPECTIVE_CAMERA_TRANSITION_TIME: 1.2,

  SOCIAL_LINKS: {
    LINKEDIN: `https://www.linkedin.com/in/bach-viet-ha-b1a674198`,
    GITHUB: `https://github.com/MortredN`,
    TWITTER: `https://twitter.com/hvbach`
  }
}

export default Constants
