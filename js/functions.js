/**
 * Funciones basicas
 **********************************************
 */
function helloWorld (name) {
  console.log('Hello ' + name);
}

helloWorld('Fernando')

/**
 * Funciones con valor de retorno
 **********************************************
 */
function dayOfTheWeek () {
  return 'Martes';
}

const day = dayOfTheWeek();
console.log(day)

/**
 * Funciones con parametros nombrados
 **********************************************
 */
function getUserFullName({ name, lastname }) {
  return `${name} ${lastname}`;
}

const fullName = getUserFullName({ name: 'Juan', lastname: 'Perez' })
console.log(fullName);