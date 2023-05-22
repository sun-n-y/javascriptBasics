//array methods

let names = ['merry', 'cherry', 'terry', 'garry', 'larry'];

//lenght

console.log(names.length);
console.log(names[names.length - 1]);

//concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);

console.log(allNames);
//reverse array
console.log(allNames.reverse());

//unshift
allNames.unshift('one');
allNames.unshift('two');
console.log(allNames);

//shift
allNames.shift();
allNames.shift();
console.log(allNames);

//push
allNames.push('last');
console.log(allNames);

//pop
allNames.pop();
allNames.pop();
console.log(allNames);

// splice
const specificNames = allNames.splice(2, 4);
console.log(specificNames);
console.log(allNames);
