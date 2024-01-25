// riddle.js

const riddles = [
  {
    level: 1,
    word: "HAUS",
    usedLetters: {}, // Objekt zur Speicherung der verwendeten Buchstaben und ihrer Nummern
    puzzles: [
      {
        hint: "Woraus besteht ein Baum?",
        solution: "Holz",
      },
      {
        hint: "Welches Tier miaut und schläft gerne?",
        solution: "Katze",
      },
      {
        hint: "Was fliegt hoch am Himmel und singt?",
        solution: "Vogel",
      },
      {
        hint: "Was trägt man am Kopf und schützt vor der Sonne?",
        solution: "Hut",
      },
      {
        hint: "Was ist gelb, süß und man kann es schälen?",
        solution: "Banane",
      },
      {
        hint: "In welchem Raum kocht man normalerweise?",
        solution: "Küche",
      },
      {
        hint: "Was hat vier Räder und fährt?",
        solution: "Auto",
      },
      {
        hint: "Welcher Tag kommt vor Montag?",
        solution: "Sonntag",
      },
    ],
  },
  // Weitere Level können hier hinzugefügt werden
];

export { riddles };
