import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const TIME_PER_QUESTION = 1;

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  curQuestion: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * TIME_PER_QUESTION * 60,
      };
    case "newAnswer": {
      const question = state.questions.at(state.curQuestion);

      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
        // points:
        //   state.answer === question.correctOption
        //     ? state.answer + question.points
        //     : state.answer,
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
        ...initialState,
        questions: state.questions,
        status: "active",
        secondsRemaining: state.questions.length * TIME_PER_QUESTION * 60,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };

    default:
      return;
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    status,
    questions,
    curQuestion,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const numOfQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce(
    (accum, question) => accum + question.points,
    0
  );

  // handler functions
  const handleStartQuiz = () => {
    dispatch({ type: "startQuiz" });
  };

  const handleNewAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  const handleNextQuestion = () => {
    if (curQuestion + 1 === numOfQuestions) dispatch({ type: "finishQuiz" });
    else dispatch({ type: "nextQuestion" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "restartQuiz" });
  };
  ///////////////////

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  const value = {
    status,
    questions,
    curQuestion,
    answer,
    points,
    highscore,
    secondsRemaining,
    numOfQuestions,
    maxPossiblePoints,
    handleStartQuiz,
    handleNewAnswer,
    handleNextQuestion,
    handleRestartQuiz,

    dispatch,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("Component lies outside the quiz context");

  console.log(context);

  return context;
}

export { QuizProvider, useQuiz };
