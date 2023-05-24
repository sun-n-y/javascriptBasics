//array challenge reduce

const averageScore =
  students.reduce(function (acc, curr) {
    acc += curr.score;
    return acc;
  }, 0) / students.length;

console.log(averageScore);
