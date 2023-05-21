//numbers challenge

const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;

console.log(totalScore, avgScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;

remainingPlates++;

const msg = 'There are ' + remainingPlates + ' plates available.';

console.log(msg);
