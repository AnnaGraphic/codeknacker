// field-for-riddle.jsx
import React from "react";
import { riddles } from "./riddle.js";

const FieldForRiddle = ({ currentLevel }) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];

  const getDisplayWord = (word) => {
    const displayArray = Array.from({ length: word.length }, (_, index) => (
      <span key={index}>_</span>
    ));
    return displayArray.join(" ");
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
      <p>Gesuchtes Wort: {getDisplayWord(riddles[currentLevel]?.word || "")}</p>
      <p>Hinweise: {getDisplayHint()}</p>
    </div>
  );
};

export default FieldForRiddle;
