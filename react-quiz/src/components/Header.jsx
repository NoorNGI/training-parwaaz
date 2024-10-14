import { useQuiz } from "../context/QuizContext";

function Header() {
  const { status } = useQuiz();

  return (
    <header className="app-header">
      <img
        src="logo512.png"
        alt="React logo"
        className={`${status === "active" ? "rotate" : ""}`}
      />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
