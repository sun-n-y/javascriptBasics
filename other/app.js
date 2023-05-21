// functions challenge

const calculateTotal = function (subTotal, tax) {
  //   const total = subTotal + tax;
  //   return total;
  return subTotal + tax;
};

// console.log(calculateTotal(10, 5));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
