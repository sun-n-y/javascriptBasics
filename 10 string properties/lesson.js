//strings properties and methods

// let text = ' Joe Doeefwefsdac  ';

// let result = text.length;

// console.log(text.length);
// console.log(text.toLocaleLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('e'));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().toLocaleLowerCase().startsWith('joe'));
// console.log(text.includes('ee'));
// console.log(text.slice(5, 9));

//templat literals--------------------------

const name = 'john';
const age = 25;
const sentence = "het it's " + name + ' and he is ' + age + ' years old.';

const value = `hey it's ${name} and he is ${age} years old. another example of interpolation w/ expression: ${
  3 + 3
}`;

console.log(sentence);
console.log(value);
