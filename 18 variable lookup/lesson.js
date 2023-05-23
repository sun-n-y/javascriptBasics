// variable lookup

const globalNumber = 6;

function add(num1, num2) {
  //   const globalNumber = 10;
  const result = globalNumber + num1 + num2;
  function multiply() {
    // const globalNumber = 20;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(2, 4));
