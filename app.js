// functions

// function greet(name) {
//   console.log('Hello there' + name);
// }

// //greet bob
// greet(' bob');
// //greet polo
// greet(' polo');
// //greet joes
// greet(' joes');

// const wallHeight = 80;

// function calculate(value) {
//   const newValue = value * 2.54;
//   console.log('The value in cm is: ' + newValue + ' cm');
//   return newValue;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const demensions = [width, height];
// console.log(demensions);

//function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);

const values = [firstValue, secondValue, thirdValue];
console.log(values);
