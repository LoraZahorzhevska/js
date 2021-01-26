// Задание
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Пиши код выше этой строки
  return propCount;
}

console.log(countProps({ name: 'Mango', age: 2 }));
