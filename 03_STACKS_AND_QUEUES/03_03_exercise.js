/**
 * Stack of Plates: Implementa una estructura de datos que simula una pila de platos.
 * Cuando una pila alcanza su capacidad máxima, se crea una nueva pila.
 *
 * SetOfStacks debe comportarse como una sola pila desde el exterior:
 * - push() añade elementos
 * - pop() saca elementos del último stack
 * - popAt(index) saca elementos de un stack específico (FOLLOW UP)
 *
 * Complejidad:
 * - push(): O(1)
 * - pop(): O(1)
 * - popAt(index): O(n) donde n es el número de elementos después del índice
 * - Espacio: O(n) donde n es el número total de elementos
 */
class SetOfStacks {
  /**
   * @param {number} capacity Capacidad máxima de cada stack individual
   */
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("La capacidad debe ser mayor que 0");
    }
    this.capacity = capacity;
    this.stacks = [];
  }

  /**
   * Añade un valor a la estructura.
   * Si el último stack está lleno, crea uno nuevo.
   * @param {any} value El valor a añadir
   */
  push(value) {
    // Si no hay stacks o el último está lleno, crear uno nuevo
    if (
      this.stacks.length === 0 ||
      this.getLastStack().length >= this.capacity
    ) {
      this.stacks.push([]);
    }

    // Añadir el valor al último stack
    this.getLastStack().push(value);
  }

  /**
   * Saca y devuelve el valor de la cima de la estructura.
   * @returns {any} El valor sacado
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("La estructura está vacía");
    }

    const lastStack = this.getLastStack();
    const value = lastStack.pop();

    // Si el último stack quedó vacío, eliminarlo
    if (lastStack.length === 0) {
      this.stacks.pop();
    }

    return value;
  }

  /**
   * Devuelve el valor de la cima sin sacarlo.
   * @returns {any} El valor en la cima
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    const lastStack = this.getLastStack();
    return lastStack[lastStack.length - 1];
  }

  /**
   * FOLLOW UP: Saca un valor de un stack específico.
   * Después de hacer pop, desplaza los elementos de los stacks siguientes
   * para mantener todos los stacks (excepto el último) a capacidad máxima.
   * @param {number} index Índice del stack (0-based)
   * @returns {any} El valor sacado
   */
  popAt(index) {
    if (index < 0 || index >= this.stacks.length) {
      throw new Error("Índice fuera de rango");
    }

    const value = this.stacks[index].pop();

    // Si el stack quedó vacío, eliminarlo
    if (this.stacks[index].length === 0) {
      this.stacks.splice(index, 1);
    } else {
      // Desplazar elementos hacia la izquierda (left shift)
      // para mantener todos los stacks llenos excepto el último
      this.leftShift(index);
    }

    return value;
  }

  /**
   * Desplaza elementos hacia la izquierda después de un popAt.
   * Mueve el elemento inferior del stack siguiente al stack actual.
   * @param {number} index Índice desde donde empezar el desplazamiento
   * @private
   */
  leftShift(index) {
    // Iterar sobre los stacks restantes
    for (let i = index; i < this.stacks.length - 1; i++) {
      const currentStack = this.stacks[i];
      const nextStack = this.stacks[i + 1];

      // Mover el primer elemento del siguiente stack al final del actual
      const bottomValue = nextStack.shift();
      currentStack.push(bottomValue);

      // Si el siguiente stack quedó vacío, eliminarlo y detener
      if (nextStack.length === 0) {
        this.stacks.splice(i + 1, 1);
        break;
      }
    }
  }

  /**
   * Verifica si la estructura está vacía.
   * @returns {boolean}
   */
  isEmpty() {
    return this.stacks.length === 0;
  }

  /**
   * Devuelve el último stack.
   * @returns {Array}
   * @private
   */
  getLastStack() {
    if (this.stacks.length === 0) {
      return null;
    }
    return this.stacks[this.stacks.length - 1];
  }

  /**
   * Devuelve el número total de elementos en la estructura.
   * @returns {number}
   */
  size() {
    let total = 0;
    for (const stack of this.stacks) {
      total += stack.length;
    }
    return total;
  }

  /**
   * Devuelve el número de stacks.
   * @returns {number}
   */
  numberOfStacks() {
    return this.stacks.length;
  }

  /**
   * Representación visual de la estructura (para debugging).
   * @returns {string}
   */
  toString() {
    let result = "SetOfStacks:\n";
    this.stacks.forEach((stack, index) => {
      result += `  Stack ${index}: [${stack.join(", ")}]\n`;
    });
    return result;
  }
}

// --- Ejemplos de Uso ---

console.log("=== Ejemplo 1: Operaciones Básicas ===\n");
const plates = new SetOfStacks(3); // Capacidad de 3 por stack

console.log("Añadiendo elementos del 1 al 7...");
for (let i = 1; i <= 7; i++) {
  plates.push(i);
}
console.log(plates.toString());
// Stack 0: [1, 2, 3]
// Stack 1: [4, 5, 6]
// Stack 2: [7]

console.log("Número de stacks:", plates.numberOfStacks()); // 3
console.log("Total de elementos:", plates.size()); // 7
console.log("Elemento en la cima:", plates.peek()); // 7

console.log("\n=== Ejemplo 2: Pop Normal ===\n");
console.log("Sacando elemento:", plates.pop()); // 7
console.log("Sacando elemento:", plates.pop()); // 6
console.log(plates.toString());
// Stack 0: [1, 2, 3]
// Stack 1: [4, 5]

console.log("\n=== Ejemplo 3: PopAt (FOLLOW UP) ===\n");
const plates2 = new SetOfStacks(3);
for (let i = 1; i <= 9; i++) {
  plates2.push(i);
}
console.log("Estado inicial:");
console.log(plates2.toString());
// Stack 0: [1, 2, 3]
// Stack 1: [4, 5, 6]
// Stack 2: [7, 8, 9]

console.log("\nHaciendo popAt(0) - sacando del primer stack:");
const value = plates2.popAt(0);
console.log("Valor sacado:", value); // 3
console.log(plates2.toString());
// Con left shift:
// Stack 0: [1, 2, 4]
// Stack 1: [5, 6, 7]
// Stack 2: [8, 9]

console.log("\n=== Ejemplo 4: Múltiples PopAt ===\n");
const plates3 = new SetOfStacks(2);
for (let i = 1; i <= 6; i++) {
  plates3.push(i);
}
console.log("Estado inicial:");
console.log(plates3.toString());
// Stack 0: [1, 2]
// Stack 1: [3, 4]
// Stack 2: [5, 6]

console.log("\nHaciendo popAt(1):");
plates3.popAt(1);
console.log(plates3.toString());
// Stack 0: [1, 2]
// Stack 1: [3, 5]
// Stack 2: [6]

console.log("\nHaciendo popAt(0):");
plates3.popAt(0);
console.log(plates3.toString());
// Stack 0: [1, 3]
// Stack 1: [5, 6]
