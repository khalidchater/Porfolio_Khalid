import { motion, animate } from "framer-motion";

const MotionAnimat = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reserveIndex = (index) => {
  const Totalsteps = 6;
  return Totalsteps - index - 1;
};
function Stair() {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={MotionAnimat}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reserveIndex(index) * 0.1,
            }}
            className='h-full w-full bg-white relative  '></motion.div>
        );
      })}
    </>
  );
}

export default Stair;
