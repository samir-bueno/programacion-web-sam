/////////// EJERCICIO 1 ////////////////

const person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music', 'sports']
}
          
const { 
  weight = 70,
  height = 180,
  } = person

console.log(weight, height)


//RTA: imprime 70 y 180 porque son arrays adentro de un objeto y no necesitan para ejecutarse el nombre
//principal del objeto


////////// EJERCICIO 2 /////////////////
const persone = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'music', 'sports']
}
          
const { age : personAge} = persone
console.log(age)

//RTA: No imprime nada porque aparece un error, y es porque personAge no esta definido


///////// EJERCICIO 3 ///////////////

// RTA: el valor que nos permite es destructuracion

//ej:


//...codigo de ejemplo ejercicio1
//const{name, age} = persona2:
//console.log(age)