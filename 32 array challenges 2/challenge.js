//array challenge

//forEach
// const updatedStudents2 = students.forEach(function (student) {
//   console.log(student.name.toUpperCase());
// });

//MAP
// const updatedStudents = students.map(function (student) {
//   //   console.log(student);

//   student.role = 'student';

//   return student;
// });

// console.log(updatedStudents);

//MAP 2

// const updatedStudents3 = students.map(function (student) {
//   return student.score;
// });

// const newPeople = students.map(function (student) {
//   return {
//     FIRSTNAME: student.name.toUpperCase(),
//   };
// });

// console.log(newPeople);

// filter
// const highScores = students.filter(function (student) {
//   if (student.score >= 80) return student;
// });

// console.log(highScores);

//find
// const specificId = students.find(function (student) {
//   return student.id === 3;
// });

// console.log(specificId);

//reduce

// const averageScore =
//   students.reduce(function (acc, curr) {
//     acc += curr.score;
//     return acc;
//   }, 0) / students.length;

// console.log(averageScore);

// //reduce 2
// //square bracket notation

// const subject = 'math';

// //creating a new object with name of total
// const total = {};

// total[subject] = 'some value';
// // console.log(total);

// const survey = students.reduce(function (survey, student) {
//   //   console.log(student.favoriteSubject);
//   const favSubject = student.favoriteSubject;
//   if (survey[favSubject]) {
//     survey[favSubject]++;
//   } else {
//     survey[favSubject] = 1;
//   }
//   return survey;
// }, {});

// console.log(survey);
//reduce 3

const subject = 'math';
const total = {};
total[subject] = 'some value';
// console.log(total);

const survey = students.reduce(function (acc, curr) {
  //   console.log(curr.favoriteSubject);
  const favSubject = curr.favoriteSubject;
  if (acc[favSubject]) {
    acc[favSubject] = acc[favSubject] + 1;
  } else {
    acc[favSubject] = 1;
  }
  return acc;
}, {});

console.log(survey);
