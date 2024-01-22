// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle";
import riddles from "./riddle";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [score, setScore] = useState(0);

  const handleLetterGuess = (letter) => {
    if (riddles[currentLevel].solution.includes(letter)) {
      setRevealedLetters((prevLetters) => [...prevLetters, letter]);
      setScore((prevScore) => prevScore + 10);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setRevealedLetters([]);
  };

  useEffect(() => {
    // Check if the word is completely guessed
    const currentWord = riddles[currentLevel].solution;
    if (revealedLetters.length === currentWord.length) {
      // Player has guessed the word, you can add additional logic here
    }
  }, [currentLevel, revealedLetters]);

  return (
    <div>
      <h1>Game Component</h1>
      <p>Score: {score}</p>
      <FieldForRiddle
        question={riddles[currentLevel].question}
        solution={riddles[currentLevel].solution}
        revealedLetters={revealedLetters}
      />
      {/* Render additional components or buttons */}
      <button onClick={() => handleLetterGuess("H")}>Guess H</button>
      <button onClick={() => handleNextLevel()}>Next Level</button>
    </div>
  );
};

export default Game;
