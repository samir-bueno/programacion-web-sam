// ejercicio 2

const array = ["Federico Villace", "hamburguesa", "papas"];

function procesarPedido(pedidos) {
   //codigo
   const nuevoPedido = pedidos.shift();
   pedidos.unshift("bebidas");
   pedidos.push(nuevoPedido);
   return pedidos;
}

console.log((procesarPedido(array)));

