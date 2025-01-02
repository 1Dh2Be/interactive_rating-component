import { motion } from "motion/react";
import star from "../assets/images/icon-star.svg";
import { useReview } from "./ReviewContext";

const reviewVariant = {
  scaleStart: { scale: 0 },
  scaleEnd: {
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  exitAnimation: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const Review = () => {
  const { starRating, setStarRating, setCurrentStage } = useReview();

  const handleInputClick = (e) => {
    const rating = e.currentTarget.value;
    setStarRating(rating);
    console.log("Rating:", rating);
  };

  const handleSubmit = () => {
    setCurrentStage("thankYou");
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <motion.div
        variants={reviewVariant}
        initial="scaleStart"
        animate="scaleEnd"
        exit="exitAnimation"
        className="flex h-[45%] w-11/12 max-w-sm flex-col gap-4 rounded-2xl bg-neutral-darkBlue p-6"
      >
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-slightlyLighterDarkBlue shadow-xl">
          <img src={star} alt="Star Icon" />
        </div>
        <h2 className="text-4xl">How did we do?</h2>
        <p className="text-base text-neutral-lightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us imporove our offering!
        </p>
        <ul className="my-4 flex justify-between">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-2">
                <input
                  className="... peer"
                  type="radio"
                  name="rating"
                  value={item}
                  hidden={true}
                  onClick={(e) => handleInputClick(e)}
                />
                <span className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-neutral-slightlyLighterDarkBlue font-bold hover:bg-primary-orange hover:text-neutral-veryDarkBlue peer-checked:bg-white peer-checked:text-neutral-veryDarkBlue">
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <button
          className={`rounded-3xl bg-primary-orange p-3 text-xl font-bold uppercase text-neutral-veryDarkBlue transition-all ${
            starRating
              ? "opacity-100 hover:bg-white"
              : "cursor-not-allowed opacity-60"
          }`}
          disabled={!starRating}
          onClick={handleSubmit}
        >
          submit
        </button>
      </motion.div>
    </section>
  );
};

export default Review;
