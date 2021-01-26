// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  const array = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }

  return array;
  // Пиши код выше этой строки
}

console.log(getEvenNumbers(2, 5));
