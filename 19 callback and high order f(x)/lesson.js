//functions order

// function greetMorning(name) {
//   const myName = `john`;
//   console.log(`good morning ${name}, my name is ${myName}`);
// }
// function greetafternoon(name) {
//   const myName = `john`;
//   console.log(`good afternoon ${name}, my name is ${myName}`);
// }

//call back f(x)
function morning(name) {
  return `good moring ${name.toUpperCase()}`;
}

//call back f(x)
function afternoon(name) {
  return `good afternoon ${name.repeat(3)}`;
}

//highoder function
function greet(name, cb) {
  const myName = `john`;
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter', afternoon);
