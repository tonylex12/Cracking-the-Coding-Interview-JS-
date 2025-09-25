/**
 * Realiza una compresión básica de una cadena.
 * Ejemplo: 'aabcccccaaa' se convierte en 'a2b1c5a3'.
 * @param {string} str La cadena a comprimir.
 * @returns {string} La cadena comprimida o la original si es más corta.
 */
function comprimirCadena(str) {
  // Si la cadena es muy corta, no vale la pena comprimirla.
  if (str.length <= 2) {
    return str;
  }

  const partesComprimidas = [];

  // Recorremos la cadena con el puntero 'i'.
  for (let i = 0; i < str.length; i++) {
    console.log(partesComprimidas);
    let conteo = 1;
    const caracterActual = str[i];

    // "Miramos hacia adelante" para contar los caracteres repetidos.
    // Mientras no nos salgamos de la cadena y el siguiente caracter sea igual...
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      conteo++;
      i++; // ¡Importante! Movemos 'i' para saltar el caracter ya contado.
    }

    // Añadimos el caracter y su conteo al array.
    partesComprimidas.push(caracterActual + conteo);
  }

  // Unimos las partes para formar la cadena final.
  const cadenaComprimida = partesComprimidas.join("");

  // Comparamos longitudes y devolvemos la más corta.
  return cadenaComprimida.length < str.length ? cadenaComprimida : str;
}

// --- Ejemplos de uso ---
console.log(comprimirCadena("aabcccccaaa")); // Salida: "a2b1c5a3"
console.log(comprimirCadena("abcde")); // Salida: "abcde" (porque "a1b1c1d1e1" es más larga)
console.log(comprimirCadena("aa")); // Salida: "a2"
console.log(comprimirCadena("a")); // Salida: "a"
console.log(comprimirCadena("")); // Salida: ""
