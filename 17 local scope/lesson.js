//local scope

let name = 'bobo';

function calculate() {
  const name = 'john';
  const age = 25;
  //code goes here
  ecomesGlobal = 'global variable';
}

calculate();
console.log(ecomesGlobal);

if (true) {
  const name = 'john';
}

console.log(`my name is ${name} and i'm awesome`);

{
  const name = 'john';
  special = 'special';
}

console.log(special);
