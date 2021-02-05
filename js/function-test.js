// принцип работы функции
// let car = {
//   color: 'red',
//   maxSpeed: 250,
//   audio: {
//     brand: 'sony',
//     speakers: 12,
//   },
// };

// console.log(car.color);
// car.color = 'green';
// console.log(car.color);
// // объявление функции
// function colorReset() {
//   car.color = 'red';
//   console.log(car.color);
// }

// colorReset(); //вызов функции

// вводим параметры для функции
// let car = {
//   color: 'red',
// };
// let car2 = {
//   color: 'green',
// };
// // в качестве параметра должны передать объект
// colorChange(car);
// colorChange(car2);

// function colorChange(theCar) {
//   theCar.color = 'yellow';
// }

// console.log('Car:' + car.color);
// console.log('Car2:' + car2.color);

// homework
let car = {
  maxSpeed: 240,
};
console.log(car.maxSpeed); // вывод максимальной скорости до изменения

speedChange(car); // вызов функции, параметр это объект
console.log(car.maxSpeed); // вывод новой максимальной скорости
// объявление функции
function speedChange(carSpeed) {
  carSpeed.maxSpeed = 300;
}
