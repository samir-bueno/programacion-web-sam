// while

const array = ["Federico Villace", "hamburguesa", "papas"];

let contador = 0;

while(contador < contador.lenght){
    console.log(array(contador));
    contador++;

}

//for
for(let i = 0; i < array.length; i++) {
    console.log(array[i])

}


//foreach
array.forEach((element) => {
    console.log(element);
});


//Ejercicio 3:
//Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Realizar una solución con for y una con while


const lista = [1,2,4,5,5,6,6,7] 
let suma = 0;

function sumarPares(numeros) {
  // código 
  for(let indice = 0; indice < numeros.length; indice++){
    if (numeros[indice] % 2 === 0){
        suma = suma + numeros[indice]    
    }
  }
return suma
}
console.log(sumarPares(lista))





