import thankYou from "../assets/images/illustration-thank-you.svg";
import { useReview } from "./ReviewContext";

const ThankYou = () => {

  const {starRating} = useReview();

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-11/12 h-[45%] bg-neutral-darkBlue rounded-2xl py-6 px-4 flex flex-col items-center gap-4">
        <div className="w-full flex justify-center items-center mb-2">
          <img src={thankYou} alt="Star Icon" />
        </div>
        <div className=" bg-neutral-slightlyLighterDarkBlue text-primary-orange py-1 px-4 rounded-3xl text-lg mb-6">
          {`You selected ${starRating} out of 5`}
        </div>
        <h2 className="text-4xl">Thank you!</h2>
        <p className="text-neutral-lightGrey text-base text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
