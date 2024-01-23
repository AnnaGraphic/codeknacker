// riddle.js
const generateUniqueKeyword = (solutions) => {
  // Beispiel für ein Keyword aus den Solution-Wörtern
  const keyword = [...new Set(solutions.join(""))].sort().join("");
  return keyword;
};

const assignLetterNumber = (usedLetters, letter) => {
  // Wenn der Buchstabe noch nicht im Objekt vorhanden ist, füge ihn hinzu
  if (!usedLetters.hasOwnProperty(letter)) {
    // Generiere eine zufällige Nummer (in einem festgelegten Bereich)
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Beispiel: Zufällige Zahl zwischen 1 und 100
    // Speichere die Nummer für den Buchstaben im Objekt
    usedLetters[letter] = randomNumber;
  }
  // Gib die zugeordnete Nummer zurück
  return usedLetters[letter];
};

const riddles = [
  {
    level: 1,
    word: "HAUS",
    usedLetters: {}, // Objekt zur Speicherung der verwendeten Buchstaben und ihrer Nummern
    puzzles: [
      {
        question: "Woraus besteht ein Baum?",
        solution: "Holz",
      },
      {
        question: "Welches Tier miaut und schläft gerne?",
        solution: "Katze",
      },
      {
        question: "Was fliegt hoch am Himmel und singt?",
        solution: "Vogel",
      },
      {
        question: "Was trägt man am Kopf und schützt vor der Sonne?",
        solution: "Hut",
      },
      {
        question: "Was ist gelb, süß und man kann es schälen?",
        solution: "Banane",
      },
      {
        question: "In welchem Raum kocht man normalerweise?",
        solution: "Küche",
      },
      {
        question: "Was hat vier Räder und fährt?",
        solution: "Auto",
      },
      // Weitere Rätsel für Level 1
    ],
  },
  // Weitere Level können hier hinzugefügt werden
];

// Beispielaufrufe für die Funktionen
console.log(generateUniqueKeyword(["Auto", "Küche"])); // Gibt das Beispiel-Keyword zurück

export { riddles, assignLetterNumber, generateUniqueKeyword };
