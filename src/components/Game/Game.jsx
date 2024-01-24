// Game.jsx
import React, { useState, useEffect } from "react";
import FieldForRiddle from "./field-for-riddle";
import { riddles, assignLetterNumber, generateUniqueKeyword } from "./riddle";

const Game = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [revealedLetters, setRevealedLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [usedLetters, setUsedLetters] = useState({});

  const revealLetter = (letter) => {
    if (currentWord.includes(letter) && !revealedLetters.includes(letter)) {
      setRevealedLetters((prevLetters) => [...prevLetters, letter]);
      // Hier könntest du auch die Punktzahl erhöhen oder weitere Aktionen durchführen.
    }
  };

  const handleLetterGuess = (letter) => {
    if (currentWord.includes(letter)) {
      setRevealedLetters((prevLetters) => [...prevLetters, letter]);
      setScore((prevScore) => prevScore + 10);
    }
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setRevealedLetters([]);
    // Setze das aktuelle Wort für das neue Level
    setCurrentWord(riddles[currentLevel + 1].word);
  };

  const renderLetterButtons = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.split("").map((letter) => (
      <button key={letter} onClick={() => revealLetter(letter)}>
        Guess {letter}
      </button>
    ));
  };

  useEffect(() => {
    // Sicherheitsüberprüfung für currentLevelData und currentPuzzle
    const currentLevelData = riddles[currentLevel];
    if (currentLevelData && currentLevelData.puzzles) {
      const currentPuzzle = currentLevelData.puzzles[0];
      // Hier kannst du weitere Logik mit currentPuzzle durchführen, wenn nötig
    }

    // Überprüfe, ob das Wort komplett geraten wurde
    if (
      revealedLetters.length === currentWord.length &&
      currentLevel < riddles.length - 1
    ) {
      // Spieler hat das Wort geraten und es gibt mehr Level
      handleNextLevel();
    } else if (revealedLetters.length === currentWord.length) {
      // Spieler hat das Wort im letzten Level geraten
      // Du kannst hier zusätzliche Logik hinzufügen
    }
  }, [currentWord, currentLevel, revealedLetters]);

  useEffect(() => {
    // Setze das Anfangswort für das erste Level
    setCurrentWord(riddles[currentLevel].word);
  }, [currentLevel]);

  // Beispielaufruf für die Funktion assignLetterNumber
  const letterANumber = assignLetterNumber(usedLetters, "A");
  console.log("Nummer für Buchstabe A:", letterANumber);

  return (
    <div>
      <h1>Game Component</h1>
      <p>Score: {score}</p>
      {/* Hier wird die FieldForRiddle-Komponente platziert */}
      <FieldForRiddle
        currentLevel={currentLevel}
        revealedLetters={revealedLetters}
      />
      {/* Hier werden die generierten Buchstaben-Buttons platziert */}
      {renderLetterButtons()}
      <button onClick={() => handleNextLevel()}>Next Level</button>
    </div>
  );
};

export default Game;
