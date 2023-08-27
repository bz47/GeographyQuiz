import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      {/*Header */}
      <h1>Geography Quiz</h1>
      <h2>Current Score: 2</h2>
      {/*Questions */}
      <div className="question-card">
        <h1>Question 1 of 10</h1>
        <h2>What is the Capital of Brazil?</h2>
        <ul>
          <li>Rio</li>
          <li>Sao Paulo</li>
          <li>Fortaleza</li>
          <li>Brasilia</li>
          <li>Salvador</li>
        </ul>
      </div>
      {/*Result */}
    </main>
  );
}

export default App;
