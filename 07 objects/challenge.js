//objects challenge

const car = {
  make: 'toyota',
  model: 'tacoma',
  year: 2024,
  colors: ['silver', 'black'],
  hybrid: false,
  drive: function () {
    console.log('driving');
  },
  stop() {
    console.log('stopped');
  },
};

console.log(car.make);
console.log(car.colors[0]);

car.drive();
car.stop();
