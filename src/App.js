import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const quotesCount = quotes.length;
  const [{ quote, author }, setContent] = useState({});
  useEffect(() => {
    const quotesList =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    const fetchData = async () => {
      const response = await fetch(quotesList);
      const json = await response.json();
      setQuotes(json.quotes);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * Math.floor(quotesCount));
    setContent({
      quote: quotes[randomValue]?.quote,
      author: quotes[randomValue]?.author,
    });
  }, [quotes, quotesCount]);

  return (
    <div className="App">
      <div
        id="quote-box"
        style={{
          background: "#F9665E",
          borderRadius: "24px",
          minHeight: "450px",
          margin: "5% 30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <span id="text">{quote}</span>
        <span id="author">{author}</span>
        <button
          style={{
            backgroundColor: "#EEF1E6",
            color: "#799FCB",
            border: "none",
            fontSize: "1rem",
            outline: "none",
            cursor: "pointer",
            borderRadius: 12,
            padding: "18px 36px",
          }}
          id="new-quote"
          onClick={() => {
            const randomValue = Math.floor(
              Math.random() * Math.floor(quotesCount)
            );
            setContent({
              quote: quotes[randomValue]?.quote,
              author: quotes[randomValue]?.author,
            });
          }}
        >
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote}`}
          target="_blank"
          rel="noopener noreferrer"
          id="tweet-quote"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
