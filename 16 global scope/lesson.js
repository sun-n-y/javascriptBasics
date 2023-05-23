//global scope

let name = 'bobo';
name = 'peter';

function calculate() {
  //some code
  console.log(name);
  name = 'orange';
  function inner() {
    name = 'inner name value';
    console.log(`this is from inner funciton ${name}`);
  }
  inner();
}

calculate();

if (true) {
  //some code
  console.log(name);
  name = 'pants';
}

console.log(`my name is: ${name} ad i'm awesome`);
