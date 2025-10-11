/**
 * Implementa tres pilas de tamaño fijo usando un solo array.
 */
class MultiStack {
  /**
   * @param {number} stackCapacity La capacidad individual de cada una de las tres pilas.
   */
  constructor(stackCapacity) {
    this.numberOfStacks = 3;
    this.stackCapacity = stackCapacity;
    // El array que almacenará todos los datos.
    this.values = new Array(this.numberOfStacks * stackCapacity).fill(null);
    // Un array para llevar el registro del tamaño actual de cada pila.
    this.sizes = [0, 0, 0];
  }

  /**
   * Añade un valor a una pila específica.
   * @param {number} stackNum El número de la pila (0, 1, o 2).
   * @param {any} value El valor a añadir.
   */
  push(stackNum, value) {
    if (this.isFull(stackNum)) {
      throw new Error(`Stack ${stackNum} is full.`);
    }

    // Aumentamos el tamaño de la pila.
    this.sizes[stackNum]++;
    // Asignamos el valor en el índice correcto.
    this.values[this.indexOfTop(stackNum)] = value;
  }

  /**
   * Saca y devuelve el valor de la cima de una pila específica.
   * @param {number} stackNum El número de la pila (0, 1, o 2).
   * @returns {any} El valor de la cima.
   */
  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error(`Stack ${stackNum} is empty.`);
    }

    const topIndex = this.indexOfTop(stackNum);
    const value = this.values[topIndex];
    // Limpiamos la celda y reducimos el tamaño.
    this.values[topIndex] = null;
    this.sizes[stackNum]--;

    return value;
  }

  /**
   * Devuelve el valor de la cima de una pila sin sacarlo.
   * @param {number} stackNum El número de la pila (0, 1, o 2).
   * @returns {any} El valor de la cima.
   */
  peek(stackNum) {
    if (this.isEmpty(stackNum)) {
      throw new Error(`Stack ${stackNum} is empty.`);
    }
    return this.values[this.indexOfTop(stackNum)];
  }

  /**
   * Comprueba si una pila específica está vacía.
   * @param {number} stackNum
   * @returns {boolean}
   */
  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  /**
   * Comprueba si una pila específica está llena.
   * @param {number} stackNum
   * @returns {boolean}
   */
  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  /**
   * Calcula el índice absoluto en el array para la cima de una pila.
   * @param {number} stackNum
   * @returns {number} El índice en el array 'values'.
   * @private
   */
  indexOfTop(stackNum) {
    const offset = stackNum * this.stackCapacity;
    const size = this.sizes[stackNum];
    return offset + size - 1;
  }
}

// --- Ejemplo de Uso ---
const stacks = new MultiStack(3); // Tres pilas, cada una con capacidad para 3 elementos.

console.log("Añadiendo elementos...");
stacks.push(0, 10);
stacks.push(0, 20);
stacks.push(1, 100);
stacks.push(2, 500);
stacks.push(2, 600);

console.log("Cima de la Pila 0:", stacks.peek(0)); // Salida: 20
console.log("Cima de la Pila 1:", stacks.peek(1)); // Salida: 100
console.log("Cima de la Pila 2:", stacks.peek(2)); // Salida: 600

console.log("\nSacando un elemento de la Pila 0...");
const poppedValue = stacks.pop(0);
console.log("Valor sacado:", poppedValue); // Salida: 20
console.log("Nueva cima de la Pila 0:", stacks.peek(0)); // Salida: 10
