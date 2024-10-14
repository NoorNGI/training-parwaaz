import Error from "./components/Error";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status, questions, curQuestion } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question question={questions[curQuestion]} />
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
