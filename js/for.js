// // const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// Посчитаем сумму чисел до определенного значения.
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

// Вспомним про операцию a % b и выведем остаток от деления используя цикл.

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

// Специально прервем цикл на 5-й итерации.

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
}

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
