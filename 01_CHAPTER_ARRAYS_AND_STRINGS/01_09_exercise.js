/**
 * Verifica si una cadena es una subcadena de otra.
 * (Esta es la función que asumimos que ya existe)
 * @param {string} cadenaGrande La cadena en la que buscar.
 * @param {string} subcadena La cadena a buscar.
 * @returns {boolean}
 */
function isSubstring(cadenaGrande, subcadena) {
  return cadenaGrande.includes(subcadena);
}

/**
 * Verifica si s2 es una rotación de s1 usando una sola llamada a isSubstring.
 * @param {string} s1 La cadena original.
 * @param {string} s2 La cadena que podría ser una rotación.
 * @returns {boolean}
 */
function esRotacion(s1, s2) {
  // 1. Comprobación preliminar de longitud
  if (s1.length !== s2.length || s1.length === 0) {
    return false;
  }

  // 2. Concatenar y llamar a isSubstring una sola vez
  const s1s1 = s1 + s1;
  return isSubstring(s1s1, s2);
}

// --- Ejemplo de Uso ---
const s1 = "waterbottle";
const s2 = "erbottlewat";
const s3 = "hello";

console.log(`¿"${s2}" es una rotación de "${s1}"?`, esRotacion(s1, s2)); // Salida: true
console.log(`¿"${s3}" es una rotación de "${s1}"?`, esRotacion(s1, s3)); // Salida: false
