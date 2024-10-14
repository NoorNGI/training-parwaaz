import React from "react";

function Question({ question, dispatch, answer, numOfQuestions, curQuestion }) {
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
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && (
        <button
          className="btn btn-ui"
          onClick={() => {
            if (curQuestion + 1 === numOfQuestions)
              dispatch({ type: "finishQuiz" });
            else dispatch({ type: "nextQuestion" });
          }}
        >
          {curQuestion + 1 === numOfQuestions ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export default Question;
