// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  {
    name: 'Радар',
    price: 1300,
    quantity: 4,
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3,
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7,
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 9,
  },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строк
  const nameProduct = [];
  //const priceProduct = [];

  for (const item of products) {
    //console.table(item);

    nameProduct.push(item.name);
    //priceProduct.push(item.price);

    //console.table(nameProduct);
    //console.table(priceProduct);
    //console.table(item);
    //console.table(Object.keys(item));
    if (nameProduct.includes(productName)) {
      //priceProduct === item.price;
      return item.price;
    }
  }
  return null;
  // Пиши код выше этой строки
}

console.log(getProductPrice('Радар'));
console.log(getProductPrice('Захват'));
console.log(getProductPrice('Сканер'));
console.log(getProductPrice('Дроид'));
console.log(getProductPrice('Двигатель'));
