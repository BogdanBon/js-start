// ---------------------------------------------------------------------------

// case 1

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
    
//     orderedItems.forEach(orderedItem => {
//         totalPrice += orderedItem;
//     });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.

// ---------------------------------------------------------------------------

// case 2

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     numbers.forEach(number => {

//         if (number > value) {
//             filteredNumbers.push(number);
//         }
        
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5].
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5].
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает [].
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76].
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76].

// ---------------------------------------------------------------------------

// case 3

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }

//     firstArray.forEach(element => {

//         if (secondArray.includes(element)) {
//             commonElements.push(element);

//         }
        
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает [].

// ---------------------------------------------------------------------------

// case 4

// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// ---------------------------------------------------------------------------

// case 5

// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 6

// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }
// // Пиши код выше этой строки

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116.

// ---------------------------------------------------------------------------

// case 7

// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// ---------------------------------------------------------------------------

// case 8

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }

// ---------------------------------------------------------------------------

// case 9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки

//     const pureArray = [];

//     numbers.forEach(element => {
//         if (element % 2 === 0) {
//             pureArray.push(element + value);
//         } else pureArray.push(element);
//     });

//     return pureArray;

//     // Пиши код выше этой строки
// }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // возвращает новый массив [1, 12, 3, 14, 5].
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // возвращает новый массив [12, 18, 3, 7, 14, 16].
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // возвращает новый массив [17, 124, 168, 31, 142].
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // возвращает новый массив [144, 13, 81, 192, 136, 154].

// ---------------------------------------------------------------------------

// case 10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// ---------------------------------------------------------------------------

// case 11

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(book => book.title);

// ---------------------------------------------------------------------------

// case 12

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(book=>book.genres);

// ---------------------------------------------------------------------------

// case 13

// Пиши код ниже этой строки
// const getUserNames = users => users.map(user => user.name);
  // Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 14

// Пиши код ниже этой строки
// const getUserEmails = users => users.map(user=>user.email);
  // Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 15

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number=>number%2===0);
// const oddNumbers = numbers.filter(number=>number%2!==0);

// ---------------------------------------------------------------------------

// case 16

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
//   const allGenres = books.flatMap(book=>book.genres);
//   const uniqueGenres = allGenres.filter((genre, index)=> allGenres.indexOf(genre) === index );
  
// console.log(allGenres);
// console.log(uniqueGenres);

// ---------------------------------------------------------------------------

// case 17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter(book=>book.author===AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ---------------------------------------------------------------------------

// case 18

// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => users.filter(user=>user.eyeColor === color);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 19

// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age < maxAge && user.age > minAge);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 20

// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 21

// Пиши код ниже этой строки
// const getFriends = (users) => {
    
//     const mappedFriends = users.flatMap(user => user.friends);

//     const filteredFriends = mappedFriends.filter((friend, index)=> mappedFriends.indexOf(friend) === index )
  
//     return filteredFriends;
// };
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 22

// Пиши код ниже этой строки
// const getActiveUsers = (users) => users.filter(user=>user.isActive);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 23

// Пиши код ниже этой строки
// const getInactiveUsers = (users) => users.filter(user=>!user.isActive);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 24

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book=>book.title===BOOK_TITLE);
// const bookByAuthor = books.find(book=>book.author===AUTHOR);

// ---------------------------------------------------------------------------

// case 25

// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => users.find(user=>user.email===email);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(element=>element%2===0);
// const eachElementInFirstIsOdd = firstArray.every(element=>!(element%2===0));

// const eachElementInSecondIsEven = secondArray.every(element=>element%2===0);
// const eachElementInSecondIsOdd = secondArray.every(element=>!(element%2===0));

// const eachElementInThirdIsEven = thirdArray.every(element=>element%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(element=>!(element%2===0));

// ---------------------------------------------------------------------------

// case 27

// Пиши код ниже этой строки
// const isEveryUserActive = (users) => users.every(user=>user.isActive);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(element=>element%2===0);
// const anyElementInFirstIsOdd = firstArray.some(element=>!(element%2===0));

// const anyElementInSecondIsEven = secondArray.some(element=>element%2===0);
// const anyElementInSecondIsOdd = secondArray.some(element=>!(element%2===0));

// const anyElementInThirdIsEven = thirdArray.some(element=>element%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(element=>!(element%2===0));

// ---------------------------------------------------------------------------

// case 29

// Пиши код ниже этой строки
// const isAnyUserActive = users => users.some(user=>user.isActive);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc,time)=>acc+time, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// ---------------------------------------------------------------------------

// case 31

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, number) => acc + number.playtime/number.gamesPlayed, 0);

// ---------------------------------------------------------------------------

// case 32

// Пиши код ниже этой строки
// const calculateTotalBalance = users => users.reduce((acc, el)=>acc+el.balance, 0);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 33

// Пиши код ниже этой строки
// const getTotalFriendCount = users => users.reduce((acc, el)=>acc+el.friends.length, 0);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 34

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ---------------------------------------------------------------------------

// case 35

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

// ---------------------------------------------------------------------------

// case 36

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));

// ---------------------------------------------------------------------------

// case 37

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating-a.rating);

// ---------------------------------------------------------------------------

// case 38

// Пиши код ниже этой строки
// const sortByAscendingBalance = users => [...users].sort((a,b)=>a.balance-b.balance);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 39

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => [...users].sort((a,b)=>b.friends.length-a.friends.length);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 40

// Пиши код ниже этой строки
// const sortByName = users => [...users].sort((a,b)=>a.name.localeCompare(b.name));
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 41

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// 		.filter(book=>book.rating>MIN_BOOK_RATING)
// 		.map(authorName=>authorName.author)
//         .sort((a, b) => a.localeCompare(b));
        
// console.log(names);

// ---------------------------------------------------------------------------

// case 42

// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user=>user.name);
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 43

// Пиши код ниже этой строки
// const getSortedFriends = users => [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
// Пиши код выше этой строки

// ---------------------------------------------------------------------------

// case 44

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => [...users]
// 		.filter(user=>user.gender===gender)
// 		.reduce((acc,el)=>acc+el.balance, 0)
;
// Пиши код выше этой строки