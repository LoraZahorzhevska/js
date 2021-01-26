function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  let totalPrice = 0;

  message = message.split(' ').length;
  //   console.log(message);

  //   message = message.length;
  //   console.log(message);

  totalPrice = message * pricePerWord;

  return totalPrice;

  // Пиши код выше этой строки
}

console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
console.log(
  calculateEngravingPrice('Веб-разработка это творческая работа', 40),
);
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
