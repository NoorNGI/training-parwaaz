import React from "react";
import { useQuiz } from "../context/QuizContext";

function StartScreen() {
  const { numOfQuestions, handleStartQuiz } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React mastery</h3>
      <button className="btn" onClick={handleStartQuiz}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
