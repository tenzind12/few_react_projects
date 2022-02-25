import React, { useState, useEffect } from "react";
import Button from "./Button";
import data from "./data";
import People from "./People";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  // for resetting the index
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 30000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <People index={index} people={people} />
        <Button index={index} setIndex={setIndex} />
      </div>
    </section>
  );
}

export default App;
