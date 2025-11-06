// Problema 3 - Calcular la matriz transpuesta usando funciones lambda

let X = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// map anidado con lambdas
let XT = X[0].map((_, i) => X.map(fila => fila[i]));

console.log("Matriz original:");
console.log(X);

console.log("Matriz transpuesta:");
console.log(XT);
