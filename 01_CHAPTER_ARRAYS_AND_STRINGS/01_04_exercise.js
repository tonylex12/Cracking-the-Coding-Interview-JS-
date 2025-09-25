/**
 * Verifica si una cadena es una permutación de un palíndromo.
 * @param {string} str La cadena de entrada.
 * @returns {boolean} True si es una permutación de un palíndromo, false en caso contrario.
 */
function esPermutacionDePalindromo(str) {
  // Mapa para almacenar la frecuencia de cada carácter.
  const frecuencia = new Map();

  // 1. Contamos la frecuencia de cada carácter, ignorando mayúsculas y no-letras.
  for (const char of str) {
    const lowerChar = char.toLowerCase();

    // Solo nos interesan las letras del alfabeto.
    if (lowerChar >= "a" && lowerChar <= "z") {
      const conteo = (frecuencia.get(lowerChar) || 0) + 1;
      frecuencia.set(lowerChar, conteo);
    }
  }

  console.log(frecuencia);

  // 2. Verificamos cuántos caracteres tienen un conteo impar.
  let conteoImpar = 0;
  for (const count of frecuencia.values()) {
    if (count % 2 !== 0) {
      conteoImpar++;
    }

    // Si en algún momento tenemos más de un impar, ya no puede ser palíndromo.
    if (conteoImpar > 1) {
      return false;
    }
  }

  // Si llegamos aquí, es porque hubo 0 o 1 caracteres con conteo impar.
  return true;
}

// --- Ejemplos de uso ---
console.log(esPermutacionDePalindromo("Tact Coa")); // Salida: true (t:2, a:2, c:2, o:1 -> un impar)
console.log(esPermutacionDePalindromo("aabbc")); // Salida: true (a:2, b:2, c:1 -> un impar)
console.log(esPermutacionDePalindromo("aabb")); // Salida: true (a:2, b:2 -> cero impares)
console.log(esPermutacionDePalindromo("hola")); // Salida: false (h:1, o:1, l:1, a:1 -> cuatro impares)
console.log(esPermutacionDePalindromo("carro")); // Salida: false (c:1, a:1, r:2, o:1 -> tres impares)
