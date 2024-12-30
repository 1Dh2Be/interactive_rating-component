import Review from "./components/Review";
import ThankYou from "./components/ThankYou";
import { ReviewProvider } from "./components/ReviewContext";

function App() {
  return (
    <>
      <ReviewProvider>
        <Review />
        <ThankYou />
      </ReviewProvider>
    </>
  );
}

export default App;
