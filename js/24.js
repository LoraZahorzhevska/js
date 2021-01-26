// Задание
//Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  const text = '';
  data: {
    text, category, priority;
  }
  //const newObj = { ...data, category, priority, completed };
  const newObj = { category, priority, completed, ...data };

  return newObj;
  // Пиши код выше этой строки
}

console.log(makeTask({}));
console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
console.log(makeTask({ text: 'Купить хлеб' }));
