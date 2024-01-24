// field-for-riddle.jsx
import React from "react";
import { riddles } from "./riddle";

const FieldForRiddle = ({ currentLevel, revealedLetters, usedLetters }) => {
  const getDisplayWord = () => {
    const currentPuzzle = riddles[currentLevel]?.puzzles[0] || {};
    const solution = currentPuzzle.solution || "";

    return solution
      .split("")
      .map((letter) =>
        revealedLetters.includes(letter)
          ? letter
          : usedLetters && usedLetters.hasOwnProperty(letter)
          ? usedLetters[letter]
          : "_"
      )
      .join(" ");
  };

  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      <p>Gesuchtes Wort: {getDisplayWord()}</p>
      {riddles[currentLevel]?.puzzles.map((puzzle, index) => (
        <div key={index}>
          <p>
            Hinweis {index + 1}: {puzzle?.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FieldForRiddle;
