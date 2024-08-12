'use client'
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

function Pagetransition({children}) {
  const pathName = usePathname()
  return (
     <AnimatePresence>
      <div key={pathName}>
      <motion.div
      initial={{opacity:2}}
      animate = {{
        opacity:0,
        transition: {delay:0.1, duration:0.2, ease: "easeInOut"},
      }}
      className="h-screen w-screen fixed bg-primary top-0  pointer-events-none"
      >
       
      </motion.div>
      </div>
      {children}
     </AnimatePresence>
  )
}

export default Pagetransition