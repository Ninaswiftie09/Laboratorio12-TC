// Problema 2 - Ordenar lista de diccionarios usando funciones lambda

let lista = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' }
];

// key que se usará para ordenar
let key = 'model';

// sort con función lambda 
let ordenada = lista.sort((a, b) => a[key] - b[key]);

console.log("Lista ordenada por 'model':");
console.log(ordenada);
