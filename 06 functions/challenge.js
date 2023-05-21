// functions challenge

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

var order1 = calculateTotal(10, 5);
var order2 = calculateTotal(15, 5);
var order3 = calculateTotal(20, 5);

//function expression of above
const calc = function (subTotal, tax) {
  return subTotal + tax;
};

var order4 = calc(25, 5);
var order5 = calc(30, 5);

const orderTotals = [order1, order2, order3, order4, order5, calc(35, 5)];
console.log(orderTotals);
