import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoaderFull from "./components/LoaderFull";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <LoaderFull />;

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
