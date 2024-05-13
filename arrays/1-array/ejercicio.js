// metodo push

const frutas = ["banana", "frutilla"];
const nuevafruta = "pera";

console.log(frutas);
//se añade al final la nuevaFruta "pera"
frutas.push(nuevafruta);

console.log(frutas)

frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)


//ejercicio 1
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10
numbers[2] = 30
console.log(numbers)

//se imprime numbers solo que el primer valor de la lista cambia a 10 y el tercer valor de la lista cambia a 30