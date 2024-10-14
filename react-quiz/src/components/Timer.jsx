import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: "tick" }), 1000);

    if (secondsRemaining === 0) dispatch({ type: "finishQuiz" });

    return () => clearInterval(timer);
  }, [dispatch, secondsRemaining]);

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes} :{" "}
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
