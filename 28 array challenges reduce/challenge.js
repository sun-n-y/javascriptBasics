// //array challenge reduce

// const averageScore =
//   students.reduce(function (acc, curr) {
//     acc += curr.score;
//     return acc;
//   }, 0) / students.length;

// console.log(averageScore);

//square bracket notation

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
