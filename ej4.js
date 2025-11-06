// Problema 4 - Eliminar elementos indicados de una lista usando funciones lambda

let lista = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
let borrar = ['amarillo', 'cafe', 'blanco'];

// filter con lambda
let resultado = lista.filter(color => !borrar.includes(color));

console.log("Lista original:");
console.log(lista);

console.log("Elementos a borrar:");
console.log(borrar);

console.log("Resultado final:");
console.log(resultado);
