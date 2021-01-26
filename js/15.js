// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
  //console.log(key);
  keys.push(key);
  values.push(apartment[key]);
  //console.log(apartment[key]);
}
