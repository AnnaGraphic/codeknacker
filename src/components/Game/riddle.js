// riddle.js

const riddles = [
  {
    level: 1,
    word: "HAUS",
    usedLetters: {}, // Objekt zur Speicherung der verwendeten Buchstaben und ihrer Nummern
    puzzles: [
      {
        hint: "Woraus besteht ein Baum?",
        solution: "HOLZ",
      },
      {
        hint: "Welches Tier miaut und schläft gerne?",
        solution: "KATZE",
      },
      {
        hint: "Was fliegt hoch am Himmel und singt?",
        solution: "VOGEL",
      },
      {
        hint: "Was trägt man am Kopf und schützt vor der Sonne?",
        solution: "HUT",
      },
      {
        hint: "Was ist gelb, süß und man kann es schälen?",
        solution: "BANANE",
      },
      {
        hint: "In welchem Raum kocht man normalerweise?",
        solution: "KÜCHE",
      },
      {
        hint: "Was hat vier Räder und fährt?",
        solution: "AUTO",
      },
      {
        hint: "Welcher Tag kommt vor Montag?",
        solution: "SONNTAG",
      },
    ],
  },
  // Weitere Level können hier hinzugefügt werden
];

export { riddles };
