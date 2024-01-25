// field-for-riddle.jsx
import React from "react";
import { riddles } from "./riddle.js";

const FieldForRiddle = ({ currentLevel }) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];
  const word = riddles[currentLevel]?.word || "";

  const getDisplayWord = (word) => {
    return <span>{word}</span>;
  };

  const getDisplayHint = () => {
    const hintElements = [];

    puzzles.forEach((puzzle, index) => {
      hintElements.push(
        <div key={index + 1}>
          <p>{`Hinweis ${index + 1}: ${puzzle?.hint}`}</p>
          <p>{`Lösung: ${puzzle?.solution}`}</p>
        </div>
      );
    });

    return hintElements;
  };

  return (
    <div>
      <p>Level: {currentLevel + 1}</p>
      <p>Gesuchtes Wort: {getDisplayWord(word)}</p>
      <p>Hinweise: {getDisplayHint()}</p>
    </div>
  );
};

export default FieldForRiddle;
