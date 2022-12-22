import React, { useState, useEffect } from "react";

import "./App.css";

import Document from "./components/Document";

function App() {
  const [content, setContent] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Make the API call to fetch the content
    fetch("https://loripsum.net/api/long/plaintext")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  const handleScroll = (event) => {
    // Check if the user has scrolled to the bottom of the content
    if (
      event.target.scrollTop + event.target.clientHeight >=
      event.target.scrollHeight
    ) {
      setIsButtonEnabled(true);
    }
  };

  return (
    <div className="App">
      <section className="hero">
        <div className="hero-body">
          <p className="title">A React Task</p>
          <p className="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div className="container is-fullhd">
        <div className="notification">
          <div className="App">
            <Document
              title="Terms and Conditions"
              content={content}
              onScroll={handleScroll}
            />
            <button disabled={!isButtonEnabled}>I Agree</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
