function nextInterval(interval, streak, rating, dayUntil, cardUnit, currentSemester) {
  let result = 0;
  if (rating === "again") {
    result = 1;
  } else if (rating === "good") {
    if (streak === 0) {
      result = 1;
    } else if (streak === 1) {
      result = 3;
    } else {
      result = interval*2;
    }
  } else if (rating === "easy") {
    if (streak === 0) {
      result = 2;
    } else if (streak === 1) {
      result = 6;
    } else {
      result = interval*3;
    }
  }

  if (cardUnit <= currentSemester && dayUntil <= 14) {
    if (currentSemester === 1 || currentSemester === 2) {
      if (result > 5) {
        result = 5;
      }
    } else if (currentSemester === 3 || currentSemester === 4) {
      if (result > 3) {
        result = 3;
      }
    }
  }
  return result;
}