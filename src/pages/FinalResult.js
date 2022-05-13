import React, { useState } from "react";
import "./App.css";
import Questions from "./Questions";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">

      <h1>USA Quiz 🇺🇸</h1>

      
      <h2>Score: {score}</h2>

      
      {showResults ? (
      
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {Questions.length} correct - (
            {(score / Questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
       
        <div className="question-card">
          
          <h2>
            Question: {currentQuestion + 1} out of {Questions.length}
          </h2>
          <h3 className="question-text">{Questions[currentQuestion].text}</h3>

          <ul>
          {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;