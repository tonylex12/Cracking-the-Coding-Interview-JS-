/**
 * Verifica si dos cadenas están a una edición de distancia.
 * @param {string} str1 La primera cadena.
 * @param {string} str2 La segunda cadena.
 * @returns {boolean} True si están a una o cero ediciones de distancia.
 */
function esUnCambio(str1, str2) {
  // Caso 1: La diferencia de longitud es mayor que 1.
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // Caso 2: Las cadenas tienen la misma longitud (posible reemplazo).
  if (str1.length === str2.length) {
    return verificarReemplazo(str1, str2);
  }

  // Caso 3: La longitud difiere en 1 (posible inserción/eliminación).
  // Nos aseguramos de pasar siempre la más corta primero a la función helper.
  if (str1.length < str2.length) {
    return verificarEdicion(str1, str2);
  } else {
    return verificarEdicion(str2, str1);
  }
}

/**
 * Helper para verificar el caso de reemplazo (cadenas de igual longitud).
 */
function verificarReemplazo(s1, s2) {
  let diferencias = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diferencias++;
    }
    if (diferencias > 1) {
      return false;
    }
  }
  return true;
}

/**
 * Helper para verificar inserción/eliminación (cadenas con longitud +1).
 * @param {string} sCorta La cadena más corta.
 * @param {string} sLarga La cadena más larga.
 */
function verificarEdicion(sCorta, sLarga) {
  let i = 0; // Puntero para la cadena corta
  let j = 0; // Puntero para la cadena larga
  let diferenciaEncontrada = false;

  while (i < sCorta.length && j < sLarga.length) {
    if (sCorta[i] !== sLarga[j]) {
      // Si ya habíamos encontrado una diferencia antes, es la segunda.
      if (diferenciaEncontrada) {
        return false;
      }
      diferenciaEncontrada = true;
      // Avanzamos solo el puntero de la cadena larga para "saltar" el carácter extra.
      j++;
    } else {
      // Si los caracteres son iguales, avanzamos ambos punteros.
      i++;
      j++;
    }
  }
  return true;
}

// --- Ejemplos de uso ---
console.log(esUnCambio("pale", "ple")); // true
console.log(esUnCambio("pales", "pale")); // true
console.log(esUnCambio("pale", "bale")); // true
console.log(esUnCambio("pale", "bake")); // false
console.log(esUnCambio("a", "abc")); // false
console.log(esUnCambio("hola", "hola")); // true (cero ediciones)
