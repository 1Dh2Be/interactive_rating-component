import thankYou from "../assets/images/illustration-thank-you.svg";
import { IoClose } from "react-icons/io5";
import { useReview } from "./ReviewContext";

const ThankYou = () => {
  const { starRating, setCurrentStage } = useReview();

  const closeComponent = () => {
    setCurrentStage("button");
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-[45%] w-11/12 flex-col items-center gap-4 rounded-2xl bg-neutral-darkBlue px-4 py-6">
        <div className="absolute right-7" onClick={closeComponent}>
          <IoClose size="30px" />
        </div>
        <div className="mb-2 flex w-full items-center justify-center">
          <img src={thankYou} alt="Star Icon" />
        </div>
        <div className="mb-6 rounded-3xl bg-neutral-slightlyLighterDarkBlue px-4 py-1 text-lg text-primary-orange">
          {`You selected ${starRating} out of 5`}
        </div>
        <h2 className="text-4xl">Thank you!</h2>
        <p className="text-center text-base text-neutral-lightGrey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
