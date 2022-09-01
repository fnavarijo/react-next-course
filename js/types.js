/**
 * Declaracion de variables
 **********************************************
 */
const myDog = 'Spike';
let myDogAge = 25;

// *Nota: El nombre de las variables es case sensitive
// * myDog != MyDog

/**
 * Tipos - basicos
 **********************************************
 */
const myName = 'Fernando';
const myApples = 23;
const isMonday = false;

/**
 * Tipos - Objetos - Arreglos
 **********************************************
 */
const daysOfTheWeek = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

console.log('Dia de la semana 2: ', daysOfTheWeek[1]);

// * Iteraciones sobre arreglos
for (let day of daysOfTheWeek) {
  console.log(day);
}

/**
 * Metodos funcionales
 **********************************************
 *
 * map
 * filter
 * includes
 * forEach
 */
daysOfTheWeek.forEach(day => console.log(day));



/**
 * Tipos - Objetos - "Diccionarios"
 **********************************************
 */
const myUser = { name: 'Juan', age: 32, isMarried: true };

console.log(myUser.name);

