import { useEffect, useReducer } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  curQuestion: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "newAnswer": {
      const question = state.questions.at(state.curQuestion);

      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, answer: null, curQuestion: state.curQuestion + 1 };

    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.highscore < state.points ? state.points : state.highscore,
      };
    case "restartQuiz":
      return {
        ...state,
        status: "active",
        points: 0,
        answer: null,
        curQuestion: 0,
      };

    default:
      return;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, questions, curQuestion, answer, points, highscore } = state;

  const numOfQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce(
    (accum, question) => accum + question.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numOfQuestions={numOfQuestions}
              curQuestion={curQuestion}
              answer={answer}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[curQuestion]}
              dispatch={dispatch}
              answer={answer}
              numOfQuestions={numOfQuestions}
              curQuestion={curQuestion}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
