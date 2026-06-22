function nextInterval(interval, streak, rating, dayUntil, cardUnit, currentSemester) {
  if (rating === "again") {
    return 1;
  } else if (rating === "good") {
    if (streak === 0) {
      return 1;
    } else if (streak === 1) {
      return 3;
    } else {
      return interval*2;
    }
  } else if (rating === "easy") {
    if (streak === 0) {
      return 2;
    } else if (streak === 1) {
      return 6;
    } else {
      return interval*3;
    }
  }
}

console.log(nextInterval(0, 0, "good", 60, 1, 1));
console.log(nextInterval(1, 1, "good", 60, 1, 1));
console.log(nextInterval(3, 2, "easy", 60, 1, 1));
console.log(nextInterval(9, 3, "again", 60, 1, 1));