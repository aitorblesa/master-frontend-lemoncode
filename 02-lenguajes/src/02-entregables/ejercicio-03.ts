console.log("************** DELIVERABLE 03 *********************");

/*
Implementa una función clone que, a partir de un objeto de entrada source 
devuelva un nuevo objeto con las propiedades de source
*/

/* ------------------------------------- CLONE --------------------------------------------------- */

console.log("-------- CLONE --------")

const myObject = {
  name: "Lemoncode",
  age: 25,
  isStudent: true,
  courses: ["Frontend", "Backend", "FullStack"],
  languages: ["Javascript", "TypeScript", "Python"],
};

const persona = {
  name: "Juan",
  age: 30,
  hobbies: "Padel"
}

function clone(source) {
  return {...source};
}

const cloneObject = clone(myObject);

console.log(cloneObject);

/* ------------------------------------- MERGE --------------------------------------------------- */

/*
Implementa una función merge que, dados dos objetos de entrada source y target,
devuelva un nuevo objeto con todas las propiedades de target y de source,
y en caso de propiedades con el mismo nombre, source sobreescribe a target.
*/

console.log("-------- MERGE --------")

const merge = (source, target) => {
  const clonedTarget = clone(target);
  const cloneSource = clone(source);
  return { ...clonedTarget, ...cloneSource };
};

console.log(merge(myObject, persona));
