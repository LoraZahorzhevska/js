function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Роял гранд', makePizza));
console.log(makeMessage('Ультрасыр', deliverPizza));

// При вызове ф-и makeMessage('Роял гранд', makePizza)
// в ф-ю makeMessage в параметр pizzaName передается 'Роял гранд',
// а в параметр callback ссылка на ф-ю makePizza.
// Необходимо, что бы возврат ф-и makeMessage вызывал ф-ю,
// которую мы получаем в параметр callback ф-и makeMessage,
// с аргументом который мы получаем в параметр pizzaName ф-и makeMessage.
// Этим мы вызываем ф-ю makePizza с параметром pizzaName,
// которая возвращает строку "Пицца ${pizzaName} готовится, ожидайте...".
