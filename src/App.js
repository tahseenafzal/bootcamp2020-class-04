import React, { useState } from "react";
import Message from "./Message";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);
  let [dayLight, setDayLight] = useState(false);

  return (
    <div className={`box ${dayLight ? "dayLight" : ""}`}>
      <h1>Good {dayLight ? "Morning" : "Night"}</h1>
      <Message counter={count} />
      <hr />
      <button onClick={() => setCount(++count)}>Update Counter</button>
      <button onClick={() => setDayLight(!dayLight)}>Update Day</button>
    </div>
  );
};

export default App;
