console.log("************** DELIVERABLE 01 *********************");

const myArray: string[] = ['🐒', '🐓', '🐖', '🐕', '🐎']
console.log("Array Inicial: ", myArray)
/* ------------------------------------- HEAD --------------------------------------------------- */

/*
  Implementa una función head (inmutable), tal que, dado un array como entrada,
  extraiga y devuelva su primer elemento. Utiliza destructuring.
*/
console.log("-------- HEAD --------")

// const myArray = ['🐒', '🐓', '🐖', '🐕', '🐎']

const head = (first) => console.log(first);

head(myArray)

/* ------------------------------------- TAIL --------------------------------------------------- */

/*
  Implementa una función tail (inmutable), tal que, dado un array como entrada 
  devuelta todos menos el primer elemento. Utiliza rest operator.
*/

console.log("-------- TAIL --------")
// const myArray = ['🐒', '🐓', '🐖', '🐕', '🐎']

// const head = (array) => {
//   const [, ...allButOneArray] = array
//   console.log(allButOneArray)
// };

const tail = ([, ...allButOneArray]) => console.log([...allButOneArray])
tail(myArray)

/* ------------------------------------- INIT --------------------------------------------------- */

/*
  Implementa una función init (inmutable), tal que, dado un array como entrada
  devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
*/

console.log("-------- INIT --------")
// const myArray = ['🐒', '🐓', '🐖', '🐕', '🐎']

const init = (array) => {
  const newArray = [...array]
  const lastElement = newArray.pop()
  console.log(newArray)
}

init(myArray)

/* ------------------------------------- LAST --------------------------------------------------- */

/*
  Implementa una función last (inmutable), tal que, dado un array como entrada
  devuelva el último elemento.
*/

// const myArray = ['🐒', '🐓', '🐖', '🐕', '🐎']
console.log("-------- LAST --------")
const last = (array) => console.log([...array].pop())

last(myArray)
