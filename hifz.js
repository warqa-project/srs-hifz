// an srs algorithm to help bac students memorize terminologies even better!
// the algorithm has 6 parameters to keep in mind
// 
// Parameter        | Type    | Description
// -----------------|---------|--------------------------------------------
// interval         | number  | days since last review (0 for new cards)
// streak           | number  | consecutive correct answers without "again"
// rating           | string  | student response: "again", "good", "easy"
// daysUntil        | number  | days until the next exam
// cardUnit         | number  | unit the term belongs to (1, 2, or 3)
// currentSemester  | number  | current exam (1, 2, 3, or 4 for BAC)


function jadwalHifz(interval, streak, rating, dayUntil, cardUnit, currentSemester) {
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

  if (rating === "good" && result > 90) {
    result = 90;
  }

  if (rating === "easy" && result > 180) {
    result = 180;
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

module.exports = {jadwalHifz};