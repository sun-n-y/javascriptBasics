// challenge

// function fullName(firstName, lastName) {
//   let result = `${firstName} ${lastName}`;
//   return result.toLocaleUpperCase();
// }

// console.log(fullName('lebron', 'curry'));
// console.log(fullName('curry', 'lebron'));

function fullName({ firstName, lastName }) {
  let result = `${firstName} ${lastName}`;
  return result.toLocaleUpperCase();
}

console.log(fullName({ lastName: 'curry', firstName: 'lebron' }));
