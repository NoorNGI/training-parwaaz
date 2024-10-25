import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    setIsLoading(true);

    fetch("https://api.quotable.io/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    console.log("Quote: Functional Component mounted...");

    fetchQuote();

    return () => console.log("Quote: Functional Component will unmount...");
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      <div>
        <q className="quote">{quote.content}</q>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default Quote;
