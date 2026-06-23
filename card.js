const { jadwalHifz } = require("./hifz");

function reviewCard(card, rating, dayUntil, currentSemester) {

  let newInterval = jadwalHifz(card.interval, card.streak, rating, dayUntil, card.cardUnit, currentSemester);

  card.interval = newInterval;

  if (rating === "again" && dayUntil <= 14 ) {
    
  } else if (rating === "easy" || rating === "good") {
    card.streak = card.streak + 1;
  } else if (rating === "again" && dayUntil > 14) {
    card.streak = 0;
  }

  return card
}
