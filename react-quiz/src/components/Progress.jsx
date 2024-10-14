import React from "react";
import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { numOfQuestions, curQuestion, answer, points, maxPossiblePoints } =
    useQuiz();

  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={curQuestion + Number(answer !== null)}
      />

      <p>
        Question <strong>{curQuestion + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
