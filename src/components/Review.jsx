import star from "../assets/images/icon-star.svg";
import { useReview } from "./ReviewContext";

const Review = () => {
  const { starRating, setStarRating, isSubmitted, setIsSubmitted } = useReview();

  const handleInputClick = (e) => {
    const rating = e.currentTarget.value;
    setStarRating(rating);
    console.log(rating);
  };

  const handleSubmit = () => {
    setIsSubmitted(true)
    console.log(isSubmitted)
  }


  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-11/12 h-[45%] bg-neutral-darkBlue rounded-2xl p-6 flex flex-col gap-4">
        <div className="w-10 h-10 bg-neutral-slightlyLighterDarkBlue flex justify-center items-center rounded-full shadow-xl mb-2">
          <img src={star} alt="Star Icon" />
        </div>
        <h2 className="text-4xl">How did we do?</h2>
        <p className="text-neutral-lightGrey text-base">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us imporove our offering!
        </p>
        <ul className="flex justify-between my-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-2">
                <input
                  className="peer ..."
                  type="radio"
                  name="rating"
                  value={item}
                  hidden={true}
                  onClick={(e) => handleInputClick(e)}
                />
                <span
                  className="flex justify-center items-center w-12 h-12 font-bold bg-neutral-slightlyLighterDarkBlue rounded-full cursor-pointer
                          peer-checked:text-neutral-veryDarkBlue peer-checked:bg-white
                         hover:bg-primary-orange hover:text-neutral-veryDarkBlue"
                >
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <button
          className={`bg-primary-orange p-3 text-neutral-veryDarkBlue text-xl font-bold uppercase rounded-3xl transition-all ${
            starRating
              ? "opacity-100 hover:bg-white"
              : "opacity-60 cursor-not-allowed"
          }`}
          disabled={!starRating}
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </section>
  );
};

export default Review;
