// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let frutsName = fruts.map((fruts) => fruts.name);
// console.log(frutsName);
// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }
// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }
// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// while (true) {
//   let a = Number(prompt("Введіть число більше за 100"));
//   if (a < 100 && a) {
//     continue;
//   } else {
//     break;
//   }
// }
// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];
// let arr = girls.map((girls) => girls.age);
// console.log(arr);
// let girlAsge = arr.reduce((sum, item) => sum + item);
// console.log(girlAsge / arr.length);
