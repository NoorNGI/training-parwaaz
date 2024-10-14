import React from "react";
import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const {
    points,
    maxPossiblePoints,
    highscore,
    handleRestartQuiz,
    handleGoToHome,
  } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn" onClick={handleGoToHome}>
          Go to Home
        </button>
        <button className="btn" onClick={handleRestartQuiz}>
          Restart quiz
        </button>
      </div>
    </>
  );
}

export default FinishScreen;
