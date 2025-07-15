////////////////////////////////////////////////////////////////////////
// const stydent = {
//   name: name,
//   specialty: "specialty",
//   averageScore: 1,
//   missedClasses: 1,
//   InfoStydent: function () {
//     console.log(
//       "Ім'я " +
//         this.name +
//         " спеціадбність " +
//         this.specialty +
//         " середній бал " +
//         this.averageScore +
//         " кількість пропущених занятть " +
//         this.missedClasses
//     );
//   },
// };
// const Oleksandr = {
//   name: "Oleksandr",
//   specialty: "IT",
//   averageScore: 10,
//   missedClasses: 4,
// };
// const Ann = {
//   name: "Ann",
//   specialty: "Кухар",
//   averageScore: 9,
//   missedClasses: 11,
// };
// const Ivan = {
//   name: "Ivan",
//   specialty: "водій",
//   averageScore: 7,
//   missedClasses: 15,
// };

// stydent.InfoStydent.bind(Oleksandr)();
// stydent.InfoStydent.call(Ann);
// stydent.InfoStydent.apply(Ivan);
//////////////////////////////////////////////////////////////
// document.querySelector("#html").addEventListener("click", () => {
//   console.log("HTML це ...");
// });
// document.querySelector("#css").addEventListener("click", () => {
//   console.log("CSS це ...");
// });

//////////////////////////////////////////////////////////////

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
//////////////////////////
// const fun = function (name, cost, weight) {
//   const c = Number((cost * weight).toFixed(2));
//   console.log("Назва товару " + name + " ціна " + c);
// };
// fun("banana", 30, 4.5);
// fun("cherry", 58, 1.3);
// fun("jrange", 89, 3.4);
//////////////////////////
// const add = {
//   name: name,
//   cost: 12,
//   weight: 1,
//   fun: function () {
//     console.log(
//       "Назва товару " +
//         this.name +
//         " ціна " +
//         Number((this.cost * this.weight).toFixed(2))
//     );
//   },
// };

// const banana = {
//   name: "banana",
//   cost: 30,
//   weight: 4.5,
// };
// const cherry = {
//   name: "cherry",
//   cost: 58,
//   weight: 1.3,
// };
// const jrange = {
//   name: "jrange",
//   cost: 89,
//   weight: 3.4,
// };
// add.fun.call(banana);
// add.fun.call(jrange);
// add.fun.call(cherry);
