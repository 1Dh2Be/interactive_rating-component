import Review from "./components/Review";
import ThankYou from "./components/ThankYou";
import { useReview } from "./components/ReviewContext";

function App() {

  const {isSubmitted} = useReview();


  return (
    <>
        {!isSubmitted &&
        <Review /> }
        {isSubmitted && 
        <ThankYou />}
    </>
  );
}

export default App;
