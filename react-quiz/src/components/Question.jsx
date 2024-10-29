import React from "react";
import { useQuiz } from "../context/QuizContext";
import Timer from "./Timer";

function Question() {
  const {
    questions,
    answer,
    numOfQuestions,
    curQuestion,
    handleNewAnswer,
    handleNextQuestion,
  } = useQuiz();

  const question = questions[curQuestion];

  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleNewAnswer(index)}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && (
        <button className="btn btn-ui" onClick={handleNextQuestion}>
          {curQuestion + 1 === numOfQuestions ? "Finish" : "Next"}
        </button>
      )}
      <Timer />
    </div>
  );
}

export default Question;
