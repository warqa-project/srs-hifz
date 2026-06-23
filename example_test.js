const { jadwalHifz } = require("./hifz");

// no pressure (60 days away)
console.log(jadwalHifz(30, 5, "good", 60, 1, 1)); // expect 60

// semester 1 pressure, unit 1 card
console.log(jadwalHifz(30, 5, "good", 10, 1, 1)); // expect 5

// semester 1 pressure, unit 2 card (not in scope yet)
console.log(jadwalHifz(30, 5, "good", 10, 2, 1)); // expect 60

// BAC pressure, all units
console.log(jadwalHifz(30, 5, "good", 10, 3, 4)); // expect 3