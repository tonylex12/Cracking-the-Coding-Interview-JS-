/**
 * Implementa una pila con una función adicional min() que devuelve
 * el elemento mínimo en tiempo O(1).
 *
 * Estrategia: Usar una pila auxiliar para rastrear los mínimos.
 *
 * Complejidad:
 * - Tiempo: O(1) para todas las operaciones (push, pop, min)
 * - Espacio: O(n) en el peor caso (cuando todos los elementos son decrecientes)
 */
class MinStack {
  constructor() {
    // La pila principal para todos los valores.
    this.stack = [];
    // La pila secundaria solo para llevar el registro de los mínimos.
    this.minStack = [];
  }

  /**
   * Añade un elemento a la pila.
   * @param {number} value El valor a añadir.
   */
  push(value) {
    // Siempre se añade a la pila principal.
    this.stack.push(value);

    // Se añade a la pila de mínimos solo si es un nuevo mínimo.
    // Usamos <= para manejar duplicados correctamente.
    if (this.minStack.length === 0 || value <= this.min()) {
      this.minStack.push(value);
    }
  }

  /**
   * Saca y devuelve el elemento de la cima.
   * @returns {number} El valor sacado.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("La pila está vacía.");
    }

    const value = this.stack.pop();

    // Si el valor que sacamos era el mínimo, también lo sacamos de minStack.
    if (value === this.min()) {
      this.minStack.pop();
    }

    return value;
  }

  /**
   * Devuelve el elemento mínimo actual en la pila.
   * @returns {number} El valor mínimo en la pila.
   */
  min() {
    if (this.minStack.length === 0) {
      return Infinity; // O lanzar un error, si la pila está vacía.
    }
    // El mínimo siempre está en la cima de minStack.
    return this.minStack[this.minStack.length - 1];
  }

  /**
   * Devuelve el elemento de la cima de la pila principal sin sacarlo.
   * @returns {number | null} El valor en la cima o null si está vacía.
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  /**
   * Verifica si la pila está vacía.
   * @returns {boolean}
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Devuelve el tamaño de la pila.
   * @returns {number}
   */
  size() {
    return this.stack.length;
  }
}

// --- Ejemplos de Uso ---

console.log("=== Ejemplo 1: Operaciones Básicas ===\n");
const stack = new MinStack();

console.log("Añadiendo 5...");
stack.push(5);
console.log("Mínimo actual:", stack.min()); // Salida: 5
console.log("Cima actual:", stack.peek()); // Salida: 5

console.log("\nAñadiendo 6...");
stack.push(6);
console.log("Mínimo actual:", stack.min()); // Salida: 5
console.log("Cima actual:", stack.peek()); // Salida: 6

console.log("\nAñadiendo 3...");
stack.push(3);
console.log("Mínimo actual:", stack.min()); // Salida: 3
console.log("Cima actual:", stack.peek()); // Salida: 3

console.log("\nAñadiendo 7...");
stack.push(7);
console.log("Mínimo actual:", stack.min()); // Salida: 3
console.log("Cima actual:", stack.peek()); // Salida: 7
console.log("Tamaño de la pila:", stack.size()); // Salida: 4

console.log("\nSacando elemento:", stack.pop()); // Saca 7
console.log("Mínimo actual:", stack.min()); // Salida: 3

console.log("\nSacando elemento:", stack.pop()); // Saca 3
console.log("Mínimo actual:", stack.min()); // Salida: 5

console.log("\n=== Ejemplo 2: Manejo de Duplicados ===\n");
const stack2 = new MinStack();
stack2.push(2);
stack2.push(2);
stack2.push(3);
console.log("Después de añadir [2, 2, 3]");
console.log("Mínimo:", stack2.min()); // Salida: 2

stack2.pop(); // Saca 3
console.log("\nDespués de sacar 3");
console.log("Mínimo:", stack2.min()); // Salida: 2

stack2.pop(); // Saca 2
console.log("\nDespués de sacar un 2");
console.log("Mínimo:", stack2.min()); // Salida: 2 (todavía hay otro 2)
