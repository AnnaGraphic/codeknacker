import React, { useState } from "react";
import { riddles } from "./riddle";

const FieldForRiddle = ({ currentLevel }) => {
  const puzzles = riddles[currentLevel]?.puzzles || [];
  const [selectedHint, setSelectedHint] = useState(1); // Starte mit dem ersten Hinweis

  const getDisplayWord = (word) => {
    return <span>{word}</span>;
  };

  const getDisplayHint = () => {
    return puzzles.map((puzzle, index) => (
      <div key={index + 1}>
        <p
          style={{
            cursor: "pointer",
            fontWeight: index + 1 === selectedHint ? "bold" : "normal",
          }}
          onClick={() => setSelectedHint(index + 1)}
        >{`Hinweis ${index + 1}: ${puzzle?.hint}`}</p>
        <p>{`Lösung: ${puzzle?.solution}`}</p>
      </div>
    ));
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
