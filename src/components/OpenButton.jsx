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
      >
        Open Review
      </motion.button>
    </div>
  );
};

export default OpenButton;
