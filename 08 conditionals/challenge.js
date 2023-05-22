//challenge

const person1 = {
  name1: 'joe',
  age: 18,
  status: 'resident',
};
const person2 = {
  name1: 'moe',
  age: 25,
  status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('allowed');
} else {
  console.log('not allowed');
}

if (person2.age > 18 && person2.status === 'resident') {
  console.log('allowed');
} else {
  console.log('not allowed');
}
