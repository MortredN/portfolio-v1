import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const NavItem = ({ children, onClick, active }) => {
  return (
    <motion.button
      variants={variants}
      whileHover={{ scale: active ? 1 : 1.1 }}
      whileTap={{ scale: active ? 1 : 0.95 }}
      onClick={(event) => {
        event.stopPropagation()
        onClick()
      }}
      disabled={active}
      className={`flex items-start text-left gap-x-4 transition-colors ${
        !active ? `text-white cursor-pointer` : `text-coffee-0`
      }`}
    >
      {children}
    </motion.button>
  )
}

export default NavItem
