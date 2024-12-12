console.log("************** DELIVERABLE 02 *********************");

/*
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Utiliza rest / spread operators.
*/

const concat = (...args: string[][]) => [...args].flat();

/* ------------------------------------- CONCAT --------------------------------------------------- */

const myArray1 = ['🐒', '🐓', '🐖', '🐕', '🐎'];
const myArray2 = ['🐈', '🐇', '🐉', '🐏', '🐐'];

console.log(concat(myArray1, myArray2));
