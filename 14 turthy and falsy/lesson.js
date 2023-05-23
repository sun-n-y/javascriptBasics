//truthy and falsy

const bool1 = true;
const bool2 = 2 > 1;

// if (true) {
//   console.log(`hey it works`);
// }

// if (2 > 1) {
//   console.log(`hey it also works`);
// }

const text = NaN;

if (text) {
  console.log(`the value is truthy`);
} else {
  console.log(`the value is falsy`);
}
