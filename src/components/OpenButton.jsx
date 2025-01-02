import { motion } from "motion/react";
import { useReview } from "./ReviewContext";

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
        whileHover={{
          rotate: [0, 10, -10, 10, -10, 0],
          scale: 1.3,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Open Review
      </motion.button>
    </div>
  );
};

export default OpenButton;
