//objects

//create an object
const person = {
  name: 'john',
  lastName: 'doe',
  age: 40,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting: function () {
    console.log('hello the naame is joe');
  },
};

const age = person.age;

//to access properties
person.name = 'steve';
console.log(person.name);
console.log(person.siblings[2]);
console.log(person.greeting);
person.greeting();
console.log(age);
