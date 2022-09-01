function helloWorld (name) {
  console.log('Hello ' + name);
}

function dayOfTheWeek () {
  return 'Martes';
}

function getUserFullName({ name, lastname }) {
  return `${name} ${lastname}`;
}

// Sin retornar valor
helloWorld('Fernando')

// Retornando valores
const day = dayOfTheWeek();
console.log(day)

// Parametros nombrados
const fullName = getUserFullName({ name: 'Juan', lastname: 'Perez' })
console.log(fullName);