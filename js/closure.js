// Итого, замыкание это термин который описывает способность функции запоминать лексическое окружение в котором она была объявлена, и продолжать получать доступ к переменным из этого лексического окружения вне зависимости от того где она была вызвана.

// Рассмотрим пример функции-счетчика с недоступной из вне переменной.

const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment();
counterA.increment();
counterA.increment(); // 2
counterA.increment();

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3

console.dir(counterA.increment);

const makeShef = function (name) {
  /*
   * Параметр name это локальная переменная для функции makeShef.
   * Это значит что она будет доступна функции makeDish через замыкание.
   */
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`);
  };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon

console.dir(mango);
