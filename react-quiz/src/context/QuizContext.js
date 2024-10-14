import { createContext } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  return <QuizContext.Provider value={""}>{children}</QuizContext.Provider>;
}

export { QuizProvider };
