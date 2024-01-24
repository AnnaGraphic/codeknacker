// riddle.js

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
      {
        question: "Welcher Tag kommt vor Montag?",
        solution: "Sonntag",
      },
      // Weitere Rätsel für Level 1
    ],
  },
  // Weitere Level können hier hinzugefügt werden
];

// Beispielaufrufe für die Funktionen

export { riddles };
