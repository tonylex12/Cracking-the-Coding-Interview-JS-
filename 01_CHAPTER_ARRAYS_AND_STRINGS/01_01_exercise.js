// SOLUCIÓN 1
/**
 * Determina si una cadena tiene todos los caracteres únicos usando un Set.
 * @param {string} str La cadena a verificar.
 * @returns {boolean} True si todos los caracteres son únicos, false en caso contrario.
 */
function tieneCaracteresUnicos(str) {
  // Creamos un Set para almacenar los caracteres que ya hemos visto.
  const caracteresVistos = new Set();

  // Recorremos cada carácter de la cadena.
  for (let i = 0; i < str.length; i++) {
    const caracter = str[i];

    // Preguntamos si el Set ya tiene este carácter.
    if (caracteresVistos.has(caracter)) {
      // Si ya lo tiene, encontramos un duplicado. Devolvemos false.
      return false;
    }

    // Si no lo tiene, lo añadimos al Set para registrar que ya lo vimos.
    caracteresVistos.add(caracter);
  }

  // Si el bucle termina, significa que no se encontraron duplicados.
  return true;
}

// --- Ejemplos de uso ---
console.log(tieneCaracteresUnicos("abcdef")); // Salida: true
console.log(tieneCaracteresUnicos("hola")); // Salida: true
console.log(tieneCaracteresUnicos("mundo")); // Salida: true
console.log(tieneCaracteresUnicos("casa")); // Salida: false (la 'a' está repetida)

// SOLUCIÓN 2
/**
 * Determina si una cadena tiene todos los caracteres únicos sin usar
 * una estructura de datos de apoyo explícita (usando el método de ordenación).
 * @param {string} str La cadena a verificar.
 * @returns {boolean} True si todos los caracteres son únicos, false en caso contrario.
 */
function tieneCaracteresUnicosSinEstructuras(str) {
  // 1. Convertimos la cadena en un array de caracteres para poder ordenarla.
  const caracteres = str.split("");

  // 2. Ordenamos el array alfabéticamente.
  caracteres.sort();

  // 3. Recorremos el array ordenado hasta el penúltimo elemento.
  for (let i = 0; i < caracteres.length - 1; i++) {
    // Comparamos cada carácter con el siguiente.
    if (caracteres[i] === caracteres[i + 1]) {
      // Si son iguales, encontramos un duplicado.
      return false;
    }
  }

  // Si el bucle termina, no hay duplicados adyacentes, por lo tanto, no hay duplicados en total.
  return true;
}

// --- Ejemplos de uso ---
console.log(tieneCaracteresUnicosSinEstructuras("abcdef")); // Salida: true
console.log(tieneCaracteresUnicosSinEstructuras("hola")); // Salida: true
console.log(tieneCaracteresUnicosSinEstructuras("mundo")); // Salida: true
console.log(tieneCaracteresUnicosSinEstructuras("casa")); // Salida: false
