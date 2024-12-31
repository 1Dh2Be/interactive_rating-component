import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [starRating, setStarRating] = useState();

  const [currentStage, setCurrentStage] = useState("button");

  return (
    <ReviewContext.Provider
      value={{
        starRating,
        setStarRating,
        currentStage,
        setCurrentStage,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error("useReview must be used within a ReviewProvider");
  }

  return context;
};
