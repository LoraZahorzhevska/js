// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки

  salary = Object.values(salaries);

  for (
    let i = 0;
    i < salary.length;
    i += 1
  ) {
    totalSalary += salary[i];
  }

  // Пиши код выше этой строки
  return totalSalary;
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
