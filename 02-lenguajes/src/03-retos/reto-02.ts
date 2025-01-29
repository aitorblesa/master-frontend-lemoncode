/**
 * APARTADO A
 */

// const myObject = {
//   a: 1,
//   b: {
//     c: null,
//     d: {
//       e: 3,
//       f: {
//         g: "bingo",
//       }
//     }
//   }
// };

// const deepGet = (obj, ...strings) => {
//   for (const string of strings) {
//     obj = obj?.[string];
//   }
//   return obj;
// }

// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject));  // {a: 1, b: {...}}

/**
 * APARTADO B
 */
const myObject = {};

const deepSet = (numero, obj, ...strings) => {
  // return strings ?? obj
}

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));  // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));  // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}