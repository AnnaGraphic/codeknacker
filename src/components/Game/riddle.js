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
  {
    level: 2,
    word: "TISCH",
    usedLetters: {},
    puzzles: [
      {
        hint: "Worauf isst man in der Küche?",
        solution: "TELLER",
      },
      {
        hint: "Welches Instrument hat schwarze und weiße Tasten?",
        solution: "KLAVIER",
      },
      {
        hint: "Was trägt man an den Füßen?",
        solution: "SCHUHE",
      },
      {
        hint: "Welches Tier sagt 'Muh'?",
        solution: "KUH",
      },
      {
        hint: "Wo schläft man normalerweise nachts?",
        solution: "BETT",
      },
      {
        hint: "Was fliegt in der Luft und hat Federn?",
        solution: "VOGEL",
      },
      {
        hint: "Welche Jahreszeit kommt nach dem Sommer?",
        solution: "HERBST",
      },
      {
        hint: "Was kann man essen und hat viele verschiedene Sorten?",
        solution: "OBST",
      },
    ],
  },
  {
    level: 3,
    word: "SCHULE",
    usedLetters: {},
    puzzles: [
      {
        hint: "Wo lernt man?",
        solution: "BIBLIOTHEK",
      },
      {
        hint: "Welches Fach hat mit Zahlen zu tun?",
        solution: "MATHEMATIK",
      },
      {
        hint: "Welches Tier ist das Schulmaskottchen?",
        solution: "EULE",
      },
      {
        hint: "Was schreibt man mit einem Stift?",
        solution: "AUFSÄTZE",
      },
      {
        hint: "Was trägt man als Schuluniform?",
        solution: "HEMD",
      },
      {
        hint: "Welches Fach befasst sich mit der Vergangenheit?",
        solution: "GESCHICHTE",
      },
      {
        hint: "Wo bewahrt man seine Bücher auf?",
        solution: "SCHRANK",
      },
      {
        hint: "Was macht man in der Pause auf dem Schulhof?",
        solution: "SPIELEN",
      },
    ],
  },
  // Weitere Level können hier hinzugefügt werden
];

export { riddles };
