//array challenge 3

// //map
// const updatedAthletes = athletes.map(function (athlete) {
//   athlete.gender = 'male';
//   return athlete;
// });

// console.log(updatedAthletes);

// // filter

// const numbers = athletes.filter(function (athlete) {
//   return athlete.favNumber < 12;
// });

// console.log(numbers);

// // find

// const specificId = athletes.find(function (athlete) {
//   return athlete.id === 1;
// });

// console.log(specificId.sport.toUpperCase());

// //reduce 1

// const avgOfNum =
//   athletes.reduce(function (acc, crr) {
//     acc += crr.favNumber;
//     return acc;
//   }, 0) / athletes.length;

// console.log(avgOfNum);

//reduce 2

const survey = athletes.reduce(function (acc, cur) {
  //   console.log(cur.sport);
  const favSport = cur.sport;
  if (acc[favSport]) {
    acc[favSport]++;
  } else {
    acc[favSport] = 1;
  }
  return acc;
}, {});

console.log(survey);
