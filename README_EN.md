# srs-hifz

A lightweight spaced repetition algorithm built for Algerian BAC students.
Part of the [Warqa Project](https://github.com/warqa-project).


## What is it?

A simple algorithm that decides when a student should review a term based on their past performance and how close the exam is.


## Core function

```js
jadwalHifz(interval, streak, rating, daysUntil, cardUnit, currentSemester)
```

| Parameter         | Type   | Description                              |
|-------------------|--------|------------------------------------------|
| `interval`        | number | days since last review (0 for new cards) |
| `streak`          | number | consecutive correct answers              |
| `rating`          | string | `"again"`, `"good"`, or `"easy"`         |
| `daysUntil`       | number | days until the next exam                 |
| `cardUnit`        | number | unit the term belongs to (1, 2, or 3)    |
| `currentSemester` | number | current exam: 1, 2, 3, or 4 (BAC)       |

Returns the next review interval in days.


## Algorithm

| Rating | Streak 0 | Streak 1 | Streak 2+    |
|--------|----------|----------|--------------|
| again  | requeue  | requeue  | requeue      |
| good   | 1 day    | 3 days   | interval × 2 |
| easy   | 2 days   | 6 days   | interval × 3 |

Caps: good → 90 days, easy → 180 days.

### Exam pressure

When the exam is within 14 days and the card unit is in scope:
- Semester 1 or 2 → capped at **5 days**
- Semester 3 or BAC → capped at **3 days**

Hitting `again` near the exam does **not** reset the streak.


## Usage

```js
const { jadwalHifz } = require("./hifz");
const { reviewCard } = require("./card");

let card = { id: "bac-his-001", interval: 0, streak: 0, dueDate: null, cardUnit: 1 };

card = reviewCard(card, "good", 60, 1, new Date());
console.log(card.interval); // 1
console.log(card.dueDate);  // tomorrow
```
