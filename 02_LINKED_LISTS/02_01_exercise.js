// --- Definición de la Estructura ---

class Node {
  constructor(data) {
    this.data = data; // El dato del nodo
    this.next = null; // Apuntador al siguiente nodo
  }
}

// --- Funciones Auxiliares (para los ejemplos) ---

/**
 * Crea una lista enlazada a partir de un array de valores.
 * @param {any[]} values Array de valores.
 * @returns {Node} La cabeza de la nueva lista enlazada.
 */
function createLinkedList(values) {
  if (values.length === 0) return null;
  let head = new Node(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i]);
    current = current.next;
  }
  return head;
}

/**
 * Imprime los valores de una lista enlazada en un formato legible.
 * @param {Node} head La cabeza de la lista.
 */
function printLinkedList(head) {
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// --- Solución 1: Usando un Búfer (un Set) ---

function removeDupsWithBuffer(head) {
  if (!head) return head;

  const seen = new Set();
  seen.add(head.data);
  let current = head;

  while (current.next !== null) {
    if (seen.has(current.next.data)) {
      current.next = current.next.next;
    } else {
      seen.add(current.next.data);
      current = current.next;
    }
  }
  return head;
}

// --- Solución 2: Sin Usar un Búfer ---

function removeDupsWithoutBuffer(head) {
  let current = head;
  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return head;
}

// --- Ejemplos de Uso ---

console.log("--- Ejemplo 1: Usando un Búfer ---");
let list1 = createLinkedList([1, 2, 3, 2, 4, 1, 5]);
console.log("Lista Original:");
printLinkedList(list1);

removeDupsWithBuffer(list1);

console.log("Lista sin duplicados:");
printLinkedList(list1);

console.log("\n--- Ejemplo 2: Sin Usar un Búfer ---");
let list2 = createLinkedList([7, 7, 8, 9, 8, 7, 10]);
console.log("Lista Original:");
printLinkedList(list2);

removeDupsWithoutBuffer(list2);

console.log("Lista sin duplicados:");
printLinkedList(list2);
