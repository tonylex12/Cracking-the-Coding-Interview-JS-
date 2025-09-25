/**
 * Reemplaza los espacios con '%20' simulando una operación "in-place".
 * @param {string} str La cadena de entrada, con espacio extra al final.
 * @param {number} trueLength La longitud real de la parte útil de la cadena.
 * @returns {string} La cadena URLificada.
 */
function urlifyInPlace(str, trueLength) {
  // Convertimos la cadena en un array para poder modificarla.
  const charArray = str.split("");

  // 1. Contamos cuántos espacios hay en la parte real de la cadena.
  let spaceCount = 0;
  for (let i = 0; i < trueLength; i++) {
    if (charArray[i] === " ") {
      spaceCount++;
    }
  }

  // 2. Calculamos el índice final de la nueva cadena.
  // Es la longitud real + 2 caracteres extra por cada espacio.
  let endIndex = trueLength + spaceCount * 2;

  // 3. Recorremos la cadena real desde el final hacia el principio.
  for (let i = trueLength - 1; i >= 0; i--) {
    console.log(charArray.join(""), endIndex);
    // Si el carácter no es un espacio...
    if (charArray[i] !== " ") {
      // Lo movemos a su nueva posición final.
      endIndex--;
      charArray[endIndex] = charArray[i];
    } else {
      // Si es un espacio, insertamos '%20'.
      endIndex -= 3;
      charArray[endIndex] = "%";
      charArray[endIndex + 1] = "2";
      charArray[endIndex + 2] = "0";
    }
  }

  // Unimos el array para devolver la cadena resultante.
  return charArray.join("");
}

const inputStr = "Mr John Smith    ";
const length = 13;

// --- Ejemplo de uso ---
console.log(urlifyInPlace(inputStr, length)); // Salida: "Mr%20John%20Smith"
