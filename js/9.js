// Задание
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  // Пиши код ниже этой строки
  const array = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  return longestWord;

  // Пиши код выше этой строки
}

// Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
// Вызов функции findLongestWord('Google do a roll') возвращает Google.
// Вызов функции findLongestWord('May the force be with you') возвращает force.
