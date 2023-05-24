//array challenge

// const highScores = students.filter(function (student) {
//   if (student.score >= 80) {
//     return student;
//   }
// });

// console.log(highScores);

//alt syntax

// const highScores = students.filter(function (student) {
//   if (student.score >= 80) return student;
// });

// console.log(highScores);

//alt syntax 2

const highScores = students.filter(function (student) {
  return student.score >= 80;
});

console.log(highScores);
