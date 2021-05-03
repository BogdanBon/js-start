// ---------------------------------------------------------------------------

// case 1

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr:'Просторная квартира в центре',
//     rating:4,
//     price:2153,
//     tags:['premium', 'promoted', 'top'],
// };
// ---------------------------------------------------------------------------

// case 2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner:{name:'Генри', phone:'982-126-1588',email:'henry.carter@aptmail.com'},
//   };
// ---------------------------------------------------------------------------

// case 3

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки
// ---------------------------------------------------------------------------

// case 4

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки
// ---------------------------------------------------------------------------

// case 5

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки
// ---------------------------------------------------------------------------

// case 6

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки

// apartment.price=5000;
// apartment.rating=4.7;
// apartment.owner.name='Генри Сибола';
// apartment.tags.push('trusted');
// ---------------------------------------------------------------------------

// case 7

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки

// apartment.area=60;
// apartment.rooms=3;
// apartment.location={country:'Ямайка', city: 'Кингстон'}
// ---------------------------------------------------------------------------

// case 8

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags,
//   // Пиши код выше этой строки
// };
// ---------------------------------------------------------------------------

// case 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]:'henry.carter@aptmail.com',
//   [passwordInputName]:'jqueryismyjam',
  
//   // Пиши код выше этой строки
// };
// ---------------------------------------------------------------------------

// case 10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment){
//     keys.push(key);
//     values.push(apartment[key]);
// };

// console.log(keys);
// console.log(values);
// ---------------------------------------------------------------------------

// case 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }

//   // Пиши код выше этой строки
// }
// ---------------------------------------------------------------------------

// case 12

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({})); // возвращает 0.
// console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2.
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //возвращает 3.
// ---------------------------------------------------------------------------

// case 13

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);
// ---------------------------------------------------------------------------

// case 14

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//     const numberOfKeys = Object.keys(object);
//     propCount = numberOfKeys.length;
//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({})); //возвращает 0.
// console.log(countProps({ name: 'Mango', age: 2 })); //возвращает 2.
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //возвращает 3.
// ---------------------------------------------------------------------------

// case 15

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// ---------------------------------------------------------------------------

// case 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//     const salaryArray = Object.values(salaries);
//     for (const salary of salaryArray) {
//         totalSalary += salary;
//     }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // возвращает 0.
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330.
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400.
// ---------------------------------------------------------------------------

// case 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// ---------------------------------------------------------------------------

// case 18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//       if (product.name === productName) {
//           return product.price;
//       }
//     }
//     return null;
    
  
//   // Пиши код выше этой строки
// }


// console.log(getProductPrice('Радар')); //  возвращает 1300.
// console.log(getProductPrice('Захват')); //  возвращает 1200.
// console.log(getProductPrice('Сканер')); //  возвращает 2700.
// console.log(getProductPrice('Дроид')); //  возвращает 400.
// console.log(getProductPrice('Двигатель')); //  возвращает null.
// ---------------------------------------------------------------------------

// case 19

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//     const array = [];

//     for (const product of products) {

//         for (const key of Object.keys(product)) {
//             if (key === propName) {
//                 array.push(product[key]);
//             }
//         }

//     }
    
//     return array;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name')); //   возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// console.log(getAllPropValues('quantity')); //   возвращает [4, 3, 7, 9].
// console.log(getAllPropValues('price')); //   возвращает [1300, 2700, 400, 1200].
// console.log(getAllPropValues('category')); //   возвращает [].
// ---------------------------------------------------------------------------

// case 20

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;

//     for (const product of products) {
            
//         for (const value of Object.values(product)){
//                 if (value === productName) {
//                 totalPrice = product.price*product.quantity
//                 }
//             }
            
//         }
    
//     return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Бластер')); //    возвращает 0.
// console.log(calculateTotalPrice('Радар')); //    возвращает 5200.
// console.log(calculateTotalPrice('Дроид')); //    возвращает 2800.
// console.log(calculateTotalPrice('Захват')); //    возвращает 10800.
// console.log(calculateTotalPrice('Сканер')); //    возвращает 8100.
// ---------------------------------------------------------------------------

// case 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday, today, tomorrow}=highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// ---------------------------------------------------------------------------

// case 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday,today,tomorrow,icon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}=highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// ---------------------------------------------------------------------------

// case 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const {yesterday: highYesterday,today:highToday, tomorrow:highTomorrow,icon:highIcon='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}=highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// ---------------------------------------------------------------------------

// case 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// ---------------------------------------------------------------------------

// case 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Пиши код ниже этой строки

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
//     } } 
//     = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);
// ---------------------------------------------------------------------------

// case 26

// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;
  
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } }=forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })); // возвращает 28.5.
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })); // возвращает 37.
// ---------------------------------------------------------------------------

// case 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// ---------------------------------------------------------------------------

// case 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// ---------------------------------------------------------------------------

// case 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};
// ---------------------------------------------------------------------------

// case 30

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//     const newtask = {category, priority, ...data, completed}
//     return newtask;
//   // Пиши код выше этой строки
// }



// console.log(makeTask({})); // возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' })); // возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' })); // возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' })); // возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// console.log(makeTask({ text: 'Купить хлеб' })); // возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.
// ---------------------------------------------------------------------------

// case 31

// Пиши код ниже этой строки
// function add(...args) {
//     let summ = 0;
//     for (const arg of args) {
//         summ += arg;
//     }
//   return summ;
//   // Пиши код выше этой строки
// }

// console.log(add(15, 27)); // возвращает 42.
// console.log(add(12, 4, 11, 48)); // возвращает 75.
// console.log(add(32, 6, 13, 19, 8)); // возвращает 78.
// console.log(add(74, 11, 62, 46, 12, 36)); // возвращает 241.
// ---------------------------------------------------------------------------

// case 32

// Пиши код ниже этой строки
// function addOverNum(...args) {
//     let total = 0;
//     let firstNum = 0;

//     for (const arg of args) {
//         firstNum = args[0];
//         if (arg > firstNum) {
//             total += arg;
//         }
//   }

//   return total;
//   // Пиши код выше этой строки
// }

// console.log(addOverNum(50, 15, 27)); // возвращает 0.
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71.
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51.
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218.
// ---------------------------------------------------------------------------

// case 33

// Пиши код ниже этой строки
// function findMatches(...args) {
//   const matches = []; // Не изменяй эту строку

//     for (const num of args.slice(1)) {
        
//         for (const arg of args[0]) {

//             if (num === arg) {
//                 matches.push(arg);
//             };
//         }
//     }

//   // Пиши код выше этой строки
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // возвращает [1, 2].
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // возвращает [17, 89, 2].
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // возвращает [24, 9, 41].
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // возвращает [].
// ---------------------------------------------------------------------------

// case 34

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//     },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.getBooks()); // возвращает строку 'Возвращаем все книги'.
// console.log(bookShelf.addBook('Мгла')); // возвращает строку 'Добавляем книгу Мгла'.
// console.log(bookShelf.removeBook('Красный закат')); // возвращает строку 'Удаляем книгу Красный закат'.
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна')); // возвращает строку 'Обновляем книгу Пески Дюны на Дюна'.
// ---------------------------------------------------------------------------

// case 35

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки

//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
      
      
//       return this.books;
//     // Пиши код выше этой строки
//   },
// };


// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий')); //, значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна')); //, значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].
// ---------------------------------------------------------------------------

// case 36


// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions:[],
//   // Пиши код выше этой строки
// };
// ---------------------------------------------------------------------------

// case 37

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions(){
//   return this.potions;
//   },
//   // Пиши код выше этой строки
// };
// ---------------------------------------------------------------------------

// case 38

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//       return this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };
// ---------------------------------------------------------------------------

// case 39

// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);
      
//       return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона')); //, в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
// console.log(atTheOldToad.removePotion('Зелье скорости')); //, в свойстве potions будет массив ['Каменная кожа'].
// ---------------------------------------------------------------------------

// case 40

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//         const potionIndex = this.potions.indexOf(oldName);
//             this.potions.splice(potionIndex, 1, newName);
      
      
//         return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф')); //, в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка')); //, в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].
// ---------------------------------------------------------------------------

// case 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],

//   // Пиши код ниже этой строки

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {

//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {

//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return this.potions
//       }
//         }
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name == oldName) {
//         this.potions[i].name = newName;
//         this.potions.splice(i, 1,this.potions[i]);
//         return this.potions
//       }
//         }
//   },

// //  Пиши код выше этой строки
// };



// console.log(atTheOldToad.getPotions());// для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));//, в массиве potions последним элементом будет этот объект.
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));//, в массиве potions последним элементом будет этот объект.
// console.log(atTheOldToad.removePotion('Дыхание дракона'));//, в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
// console.log(atTheOldToad.removePotion('Зелье скорости'));//, в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));//, в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));//, в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].
