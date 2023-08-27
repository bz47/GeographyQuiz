import { useState } from "react";
import { questions } from "./questions";
import "./App.css";

function App() {
  const [showfinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const reset = () => {
    setShowFinalResults(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <main>
      {/*Header */}
      <div className="header">
        <h1>Geography Quiz</h1>
        <h2>Current Score: {score} </h2>
      </div>

      {showfinalResults ? (
        <div className="final">
          <h1>Final Score</h1>
          <h2>
            {" "}
            {score} out of {questions.length} Correct - ({" "}
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => reset()}>Restart</button>
        </div>
      ) : (
        <div className="question-card">
          <h1>
            Question {currentQuestion + 1} of {questions.length}
          </h1>
          <h2>{questions[currentQuestion].text}</h2>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.answer}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;
