import Review from "./components/Review";
import ThankYou from "./components/ThankYou";
import { useReview } from "./components/ReviewContext";
import { motion } from "motion/react";
import OpenButton from "./components/OpenButton";

function App() {
  const { currentStage } = useReview();

  return (
    <>
      {currentStage === "button" && <OpenButton />}

      {currentStage === "review" && (
        <div>
          <Review />
        </div>
      )}
      {currentStage === "thankYou" && (
        <motion.div initial={{ x: "100vw" }} animate={{ x: 0 }}>
          <ThankYou />
        </motion.div>
      )}
    </>
  );
}

export default App;
