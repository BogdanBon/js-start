// case 11

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   const updatedMessage = message.split(' ');
//   const wordsInMessage = updatedMessage.length;
//   return wordsInMessage * pricePerWord;

//   console.log(updatedMessage);
//   console.log(wordsInMessage);
//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20))

// // calculateEngravingPrice('Веб-разработка это творческая работа', 20) возвращает 80.

// --------------------------------------------------------------------------

// case 13

// function slugify(title) {
//   // Пиши код ниже этой строки
//   const titleInLowerCase = title.toLowerCase();
//   const titleNoSpases = titleInLowerCase.split(' ');
//   const titleUpdated = titleNoSpases.join('-');


 
//   console.log(titleInLowerCase);
//   console.log(titleNoSpases);
//   console.log(titleUpdated);
//   // Пиши код выше этой строки
// }

// console.log(slugify('Массивы для новичков'));
// // slugify('Массивы для новичков') возвращает 'массивы-для-новичков'.

// ---------------------------------------------------------------------------

// case 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//   const array = firstArray.concat(secondArray);
//   const result = array.slice(0, maxLength);

    

//   console.log(array);
//   console.log(result);
//     // Пиши код выше этой строки
// }

// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3)); //возвращает ['Манго', 'Поли', 'Аякс'].
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4)); //возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3)); //возвращает ['Манго', 'Аякс', 'Челси'].
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2)); //возвращает ['Земля', 'Юпитер'].
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4)); //возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0)); //возвращает [].

// ---------------------------------------------------------------------------

// case 17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// ---------------------------------------------------------------------------

// case 18

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let total = 0;

//   for (let i = 1; i <= number; i += 1){
//     total = total + i;
//   }
  
//   return total;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(1)); //возвращает 1. 0+1
// console.log(calculateTotal(3)); //возвращает 6. 1+2+3
// console.log(calculateTotal(7)); //возвращает 28. 1+2+3+4+5+6+7
// console.log(calculateTotal(18)); //возвращает 171.
// console.log(calculateTotal(24)); //возвращает 300.

// ---------------------------------------------------------------------------

// case 19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i+=1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// ---------------------------------------------------------------------------

// case 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1){
//     total = total + order[i];
//   }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.

// ---------------------------------------------------------------------------

// case 21

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let longestWord = '';
//   let wordLength = 0;
//   let maxWordLength = 0;
//   const array = string.split(' ');
//   for (let i = 0; i < array.length; i += 1){
//     wordLength = array[i].length;
//     if (wordLength > maxWordLength) {
//       maxWordLength = wordLength;
//       longestWord = array[i];
//     }
//     continue
//   }
  
//   return longestWord;
//   // Пиши код выше этой строки
// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //  возвращает jumped.
// console.log(findLongestWord('Google do a roll')); //  возвращает Google.
// console.log(findLongestWord('May the force be with you')); //  возвращает force.

// ---------------------------------------------------------------------------

// case 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1){
//     numbers.push(i)
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); //   возвращает [1, 2, 3].
// console.log(createArrayOfNumbers(14, 17)); //   возвращает [14, 15, 16, 17].
// console.log(createArrayOfNumbers(29, 34)); //   возвращает [29, 30, 31, 32, 33, 34].

// ---------------------------------------------------------------------------

// case 23

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const array= [];
//   for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }

//   return array;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //    возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //    возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //    возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //    возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //    возвращает [24, 41, 76].

// // ---------------------------------------------------------------------------

// // case 24

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// Вызов checkFruit('слива') возвращает true.
// Вызов checkFruit('мандарин') возвращает false.
// Вызов checkFruit('груша') возвращает true.
// Вызов checkFruit('Груша') возвращает false.
// Вызов checkFruit('яблоко') возвращает true.

// ---------------------------------------------------------------------------

// case 25

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let commonEl = [];
// for (const number of array1) {
//   if (array2.includes(number)) {
//     commonEl.push(number);
//   }
// }

// return commonEl;  
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //     возвращает [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //     возвращает [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //     возвращает [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //     возвращает [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //     возвращает [].

// ---------------------------------------------------------------------------

// case 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
// for (const orders of order) {
//   total += orders;
// }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //      возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); //      возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.
// console.log(calculateTotalPrice([])); // возвращает 0.

// ---------------------------------------------------------------------------

// case 27

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76].

// ---------------------------------------------------------------------------

// case 28

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ---------------------------------------------------------------------------

// case 29

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   const array = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }

//   return array;
//     // Пиши код выше этой строки
// }
  
// console.log(getEvenNumbers(2, 5)); //  возвращает [2, 4].
// console.log(getEvenNumbers(3, 11)); //  возвращает [4, 6, 8, 10].
// console.log(getEvenNumbers(6, 12)); //  возвращает [6, 8, 10, 12].
// console.log(getEvenNumbers(8, 8)); //  возвращает [8].
// console.log(getEvenNumbers(7, 7)); //  возвращает [].

// ---------------------------------------------------------------------------

// case 30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

// console.log(number)

// ---------------------------------------------------------------------------

// case 31

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }

// ---------------------------------------------------------------------------

// case 32

// function includes(array, value) {
//   // Пиши код ниже этой строки
// for (const number of array) {
//   if (number === value) {
//     return true;
//   }
// }

//   return false;
//   // Пиши код выше этой строки
// }


// console.log(includes([1, 2, 3, 4, 5], 3)); // возвращает true.
// console.log(includes([1, 2, 3, 4, 5], 17)); // возвращает false.
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер')); // возвращает true.
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран')); // возвращает false.
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива')); // возвращает true.
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви')); // возвращает false.