// field-for-riddle.jsx
import React from "react";

const FieldForRiddle = ({ question, solution, revealedLetters }) => {
  const renderWord = () => {
    return solution
      .split("")
      .map((letter, index) => (
        <span key={index}>
          {revealedLetters.includes(letter) ? letter : "_"}
        </span>
      ));
  };

  return (
    <div>
      <p>{question}</p>
      <p>{renderWord()}</p>
    </div>
  );
};

export default FieldForRiddle;
