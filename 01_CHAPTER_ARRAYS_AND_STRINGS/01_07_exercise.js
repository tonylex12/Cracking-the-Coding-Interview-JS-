/**
 * Rota una matriz NxN 90 grados en el sentido de las agujas del reloj, "in-place".
 * @param {number[][]} matrix La matriz a rotar.
 * @returns {number[][]} La matriz rotada (modificada).
 */
function rotarMatriz(matrix) {
  const n = matrix.length;

  // Paso 1: Transponer la matriz
  // (Intercambiar matrix[i][j] con matrix[j][i])  matrix[fila][columna] -> matrix[columna][fila]
  for (let i = 0; i < n; i++) {
    // Empezamos j en i para no volver a intercambiar los elementos a su lugar original.
    for (let j = i; j < n; j++) {
      // Usamos desestructuración de JS para un intercambio limpio.
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  console.log("Matriz Transpuesta:");
  console.table(matrix);

  // Paso 2: Invertir cada fila
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

// --- Ejemplo de Uso ---

// 1. Definimos nuestra matriz original
let miMatriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matriz Original:");
// console.table es excelente para visualizar matrices en la consola
console.table(miMatriz);

// 2. Llamamos a la función para rotarla
rotarMatriz(miMatriz);

// 3. Mostramos el resultado
console.log("\nMatriz Rotada 90 grados:");
// La variable original miMatriz ha sido modificada "in-place"
console.table(miMatriz);
