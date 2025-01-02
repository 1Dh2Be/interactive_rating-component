import Review from "./components/Review";
import ThankYou from "./components/ThankYou";
import { useReview } from "./components/ReviewContext";
import { AnimatePresence } from "motion/react";
import OpenButton from "./components/OpenButton";

function App() {
  const { currentStage } = useReview();

  return (
    <div>
      <AnimatePresence mode="wait">
        {currentStage === "button" && <OpenButton key="button" />}

        {currentStage === "review" && <Review key="review" />}

        {currentStage === "thankYou" && <ThankYou key="thankYou" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
