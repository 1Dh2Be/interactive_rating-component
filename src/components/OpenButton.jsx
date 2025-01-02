import { motion } from "motion/react";
import { useReview } from "./ReviewContext";

const buttonVariant = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
};

const OpenButton = () => {
  const { setCurrentStage } = useReview();
  const openReview = () => {
    setCurrentStage("review");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <motion.button
        className="rounded bg-primary-orange p-2"
        onClick={openReview}
        variants={buttonVariant}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      >
        Open Review
      </motion.button>
    </div>
  );
};

export default OpenButton;
