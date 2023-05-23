//call back function and high order functions

//cb
function goodnight(name) {
  return `good night ${name}`;
}

// high order funciton
function greet(name, cb) {
  const myName = 'joe';
  console.log(` ${cb(name)}, ${myName} it is bed time`);
}

greet('bob', goodnight);
