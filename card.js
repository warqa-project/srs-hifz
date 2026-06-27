const { jadwalHifz } = require("./hifz");

function reviewCard(card, rating, dayUntil, currentSemester, todayDate) {
  let newInterval = jadwalHifz(card.interval, card.streak, rating, dayUntil, card.cardUnit, currentSemester);

  if (rating === "again") {
    if (dayUntil <= 14) {
      // near exam — keep streak
    } else {
      card.streak = 0;
    }
  } else {
    card.interval = newInterval;
    card.dueDate = new Date(todayDate);
    card.dueDate.setDate(card.dueDate.getDate() + newInterval);
    card.streak = card.streak + 1;
  }

  return card;
}

module.exports = { reviewCard };