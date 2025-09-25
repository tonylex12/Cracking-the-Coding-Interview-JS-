// SOLUCIÓN 1

/**
 * Decide si una cadena es una permutación de otra usando el método de ordenación.
 * @param {string} str1 La primera cadena.
 * @param {string} str2 La segunda cadena.
 * @returns {boolean} True si son permutaciones, false en caso contrario.
 */
function esPermutacionPorOrdenacion(str1, str2) {
  // 1. Comprobación de longitud. Es la optimización más importante.
  if (str1.length !== str2.length) {
    return false;
  }

  // 2. Convertir, ordenar y unir ambas cadenas.
  // 'hola' -> ['h', 'o', 'l', 'a'] -> ['a', 'h', 'l', 'o'] -> 'ahlo'
  const ordenada1 = str1.split("").sort().join("");
  const ordenada2 = str2.split("").sort().join("");

  // 3. Comparar las cadenas resultantes.
  return ordenada1 === ordenada2;
}

// --- Ejemplos de uso ---
console.log(esPermutacionPorOrdenacion("listen", "silent")); // Salida: true
console.log(esPermutacionPorOrdenacion("hola", "aloh")); // Salida: true
console.log(esPermutacionPorOrdenacion("apple", "papel")); // Salida: false
console.log(esPermutacionPorOrdenacion("dog", "gods")); // Salida: false (diferente longitud)

// SOLUCIÓN 2
/**
 * Decide si una cadena es una permutación de otra usando un mapa de frecuencias.
 * @param {string} str1 La primera cadena.
 * @param {string} str2 La segunda cadena.
 * @returns {boolean} True si son permutaciones, false en caso contrario.
 */
function esPermutacionPorFrecuencia(str1, str2) {
  // 1. Comprobación de longitud.
  if (str1.length !== str2.length) {
    return false;
  }

  // Creamos un mapa para guardar las frecuencias de los caracteres de str1.
  const frecuencia = new Map();

  // 2. Contamos los caracteres de la primera cadena.
  for (const caracter of str1) {
    console.log(frecuencia);
    // Si el caracter ya está en el mapa, le sumamos 1. Si no, lo inicializamos en 1.
    const conteo = (frecuencia.get(caracter) || 0) + 1;
    frecuencia.set(caracter, conteo);
  }

  // 3. Descontamos los caracteres de la segunda cadena.
  for (const caracter of str2) {
    console.log(frecuencia);
    const conteo = frecuencia.get(caracter);

    // Si el caracter no existe en el mapa o su conteo ya es cero, no son permutaciones.
    if (!conteo) {
      // Esto es true si conteo es undefined o 0
      return false;
    }

    // Restamos 1 al conteo de este caracter.
    frecuencia.set(caracter, conteo - 1);
  }

  // 4. Si el bucle termina, significa que todos los caracteres coincidieron.
  return true;
}

// --- Ejemplos de uso ---
console.log(esPermutacionPorFrecuencia("listen", "silent")); // Salida: true
console.log(esPermutacionPorFrecuencia("hola", "aloh")); // Salida: true
console.log(esPermutacionPorFrecuencia("apple", "papel")); // Salida: false
console.log(esPermutacionPorFrecuencia("text", "ttex")); // Salida: false
