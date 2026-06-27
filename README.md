# srs-hifz

خوارزمية مراجعة متباعدة خفيفة الوزن مصممة لطلاب البكالوريا الجزائريين.
جزء من [مشروع ورقة](https://github.com/warqa-project).

---

## ما هي؟

خوارزمية بسيطة تحدد متى يجب على الطالب مراجعة مصطلح معين بناءً على أدائه السابق والوقت المتبقي حتى الامتحان.

---

## الدالة الرئيسية

```js
jadwalHifz(interval, streak, rating, daysUntil, cardUnit, currentSemester)
```

| المعامل           | النوع  | الوصف                                      |
|-------------------|--------|--------------------------------------------|
| `interval`        | number | أيام منذ آخر مراجعة (0 للبطاقات الجديدة)  |
| `streak`          | number | عدد الإجابات الصحيحة المتتالية             |
| `rating`          | string | `"again"` أو `"good"` أو `"easy"`          |
| `daysUntil`       | number | أيام حتى الامتحان                          |
| `cardUnit`        | number | الوحدة التي ينتمي إليها المصطلح (1، 2، 3) |
| `currentSemester` | number | الفصل الحالي: 1، 2، 3، أو 4 (BAC)         |

تُرجع عدد أيام المراجعة التالية.

---

## منطق الخوارزمية

| التقييم | Streak 0    | Streak 1    | Streak 2+      |
|---------|-------------|-------------|----------------|
| again   | إعادة فورية | إعادة فورية | إعادة فورية    |
| good    | يوم واحد    | 3 أيام      | interval × 2   |
| easy    | يومان       | 6 أيام      | interval × 3   |

الحد الأقصى: good → 90 يوم، easy → 180 يوم.

### ضغط الامتحان

عندما يكون الامتحان خلال 14 يوماً والبطاقة ضمن نطاق الفصل:
- الفصل 1 أو 2 → الحد الأقصى **5 أيام**
- الفصل 3 أو BAC → الحد الأقصى **3 أيام**

الضغط على `again` قرب الامتحان **لا يُعيد** تصفير الـ streak.

---

## الاستخدام

```js
const { jadwalHifz } = require("./hifz");
const { reviewCard } = require("./card");

let card = { id: "bac-his-001", interval: 0, streak: 0, dueDate: null, cardUnit: 1 };

card = reviewCard(card, "good", 60, 1, new Date());
console.log(card.interval); // 1
console.log(card.dueDate);  // غداً
```