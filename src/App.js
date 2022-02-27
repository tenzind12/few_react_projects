import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) amount = 1;
    if (amount > 8) amount = data.length;
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>tired of lorem ipsum?</h3>
      <form className="lorem-ipsum" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          max={data.length}
        />
        <button type="submit" className="btn">
          Generate
        </button>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </form>
    </section>
  );
}

export default App;
