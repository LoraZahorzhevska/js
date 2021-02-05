// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  //for (const key in object) {
  //if (object.hasOwnProperty(key)) {
  //propCount += 1;
  //}
  //}
  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
  // Пиши код выше этой строки
}
