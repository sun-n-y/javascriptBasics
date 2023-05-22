//conditionals basics-------------------------------

// const value = true;
// const value2 = 1 > 2;

// if (value) {
//     console.log('value true');
// } else {
//     console.log('value false');
// }

//conditionals continued----------------------------

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// if (num1 > num2) {
//     console.log('first number is bigger than second');
// } else if (result) {
//     console.log('frist number is equal to second');
// } else {
//     console.log('second number is bigger than first');
// }

// const value3 = false;

// if (!value3) {
//     console.log('value is false');
// }

//equality-----------------------------------------

// const num1 = 6;
// const num2 = '6';

// const value = num1 != num2;
// const value2 = num1 !== num2;

// console.log(value);
// console.log(value2);

//operators-----------------------------------------

// const name1 = 'peter';
// const age = 24;

// if (name1 !== 'bob' && age === 24) {
//   console.log('hello there user');
// } else {
//   console.log('wrong values');
// }

//switch statements----------------------------------

//dice values 1-6

const dice = 6;

// // normal way
// if (dice === 1) {
//   console.log('you got one');
// }

// if (dice === 2) {
//   console.log('you got two');
// }

// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }

// //else if method
// if (dice === 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// //switch statment method

switch (dice) {
  case 1:
    console.log('you got one');
    break;
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  default:
    console.log('dice not rollen');
}
