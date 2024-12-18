import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    setIsLoading(true);

    fetch("https://quoteslate.vercel.app/api/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  // To show the mounting phase and unmounting phase of the component....
  useEffect(() => {
    console.log("Quote: Functional Component mounted...");

    fetchQuote();

    return () => console.log("Quote: Functional Component will unmount...");
  }, []);

  // To show the updating / re-rendering phase of the component....
  useEffect(() => {
    console.log("Quote: Functional Component updated...");
  }, [quote]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <div>
      <div>
        <q className="quote">{quote.quote}</q>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default Quote;
