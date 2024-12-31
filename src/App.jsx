import Review from "./components/Review";
import ThankYou from "./components/ThankYou";
import { useReview } from "./components/ReviewContext";
import { motion } from "motion/react";


function App() {

  const {isSubmitted} = useReview();


  return (
    <>
        {!isSubmitted && (
          <div>
            <Review />
          </div>
        )}
        {isSubmitted && (
          <motion.div
            initial={{x:"100vw"}}
            animate={{x:0}}
          >
            <ThankYou />
          </motion.div>
        )}
    </>
  );
}

export default App;
