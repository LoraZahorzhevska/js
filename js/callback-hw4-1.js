const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (pizzaPalace.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);

// order приймає 3 параметри - pizzaName, onSuccess, onError.
// Після того як ми визвали order
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError), маємо:
// pizzaName - 'Аль Копчино'
// onSuccess - ссилка на функцію makePizza, без визова
// onError - ссилка на функцію onOrderError, без визова
// Далі, якщо находимо pizzaName в pizzas, -> визиваємо функцію makePizza, ссилку на яку ми записали у onSuccess, передаючи в її параметр pizzaName аргумент pizzaName. Вертаємо її результат.
// Якщо ми не знайшли pizzaName в pizzas -> визиваємо функцію onOrderError, ссилка на яку записана у onError метода order. I вертаємо її результат. В параметр error запихуєш шаблонну строку. Колбек функція onOrderError(error) поверне 'Ошибка!' + пришиє те, що ти їй передаси шаблонною строкою.
