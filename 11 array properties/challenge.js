// challenge: cereating new array from old array -------------

// const names = ['anna', 'sussy', 'bob'];
// const lastName = 'shakeandbake';
// let newArray = [];

// //for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   newArray.push(`${names[i]} ${lastName}`);
// }

// console.log(names);
// console.log(newArray);

//functions, return, if, arrays, loop-------------------

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! you are spending to much`);
    return total;
  }
  console.log(`you are good`);

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
