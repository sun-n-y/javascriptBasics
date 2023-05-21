// //functions - declare it , then invoke it

// //declaring function
// function hello() {
//   //function logic
//   console.log('hello K');
//   console.log('hello J');
//   console.log('hello B');
// }

// //invoke function
// hello();
// //some code

// //invoke function
// hello();
// //some code

// //invoke function
// hello();
// //some code

// function hellok() {
//   console.log('hello k');
// }

// function helloj() {
//   console.log('hello j');
// }

// function helloo() {
//   console.log('hello o');
// }

// hellok();
// helloj();
// helloo();

// const bob = 'bob';

// function hello(name1, second) {
//   console.log('hello ' + second);
//   console.log('hello ' + name1);
// }

// hello(bob, 'k');
// hello('j');
// hello('o');

// const wallheight = 80;

// function calculate(value) {
//   //   const newValue = value * 2.54;
//   //   console.log('the value in cm is ' + value * 2.54);
//   //   return newValue;
//   return value * 2.54;
// }

// const width = calculate(100);
// const height = calculate(wallheight);

// const dimensions = [width, height];

// console.log(dimensions);
/////////////////////////////////////////////////////

//expressions

//function definition / declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//function expression
const add = function (num1, num2) {
  return num1 + num2;
};

//to use it
const thridValue = add(5, 5);

const values = [firstValue, secondValue, thridValue, add(10, 10)];
console.log(values);
