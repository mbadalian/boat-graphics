import { Gift } from "./Gift";
import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";
export const HeroText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
      >
        <span className="flex items-center gap-15px">
          God gave you this gift <Gift /> of imagination.
        </span>
        <span>Use it.</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight"
      >
        At home you have unlimited time. Working it up and down, back and forth.
        There's not a thing in the world wrong with washing your brush. Just use
        the old one inch brush.
      </motion.span>
    </motion.div>
  );
};
