/**
 * Si una celda en una matriz es 0, toda su fila y columna se establecen en 0.
 * @param {number[][]} matrix La matriz MxN.
 * @returns {number[][]} La matriz modificada.
 */
function ponerCeros(matrix) {
  if (!matrix || matrix.length === 0) {
    return matrix;
  }

  const filasACero = new Set();
  const columnasACero = new Set();
  const filas = matrix.length;
  const columnas = matrix[0].length;

  // 1. PRIMERA PASADA: Encontrar y registrar las filas/columnas con ceros.
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (matrix[i][j] === 0) {
        filasACero.add(i);
        columnasACero.add(j);
      }
    }
  }

  // 2. SEGUNDA PASADA: Anular las filas y columnas registradas.
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (filasACero.has(i) || columnasACero.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

// --- Ejemplo de Uso ---

let miMatriz = [
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
];

console.log("Matriz Original:");
console.table(miMatriz);

ponerCeros(miMatriz);

console.log("\nMatriz Modificada:");
console.table(miMatriz);
