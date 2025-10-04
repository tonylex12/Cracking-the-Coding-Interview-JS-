// --- Estructura de Datos y Funciones Auxiliares ---

class Node {
  /**
   * Representa un nodo en una lista enlazada.
   * @param {number} data El valor del nodo.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Crea una lista enlazada a partir de un array de valores.
 * @param {any[]} values Array de valores.
 * @returns {Node | null} La cabeza de la nueva lista enlazada.
 */
function createLinkedList(values) {
  if (!values || values.length === 0) return null;
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
  if (!head) {
    console.log("Lista vacía");
    return;
  }
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// --- Solución 1: Dígitos en Orden Inverso ---

/**
 * Suma dos números representados por listas enlazadas en orden inverso.
 * @param {Node} list1 Cabeza de la primera lista.
 * @param {Node} list2 Cabeza de la segunda lista.
 * @returns {Node} Cabeza de la lista resultante.
 */
function sumListsReverse(list1, list2) {
  let dummyHead = new Node(0);
  let current = dummyHead;
  let p1 = list1;
  let p2 = list2;
  let carry = 0;

  while (p1 !== null || p2 !== null || carry !== 0) {
    const val1 = p1 ? p1.data : 0;
    const val2 = p2 ? p2.data : 0;
    const sum = val1 + val2 + carry;
    const newDigit = sum % 10;
    carry = Math.floor(sum / 10);

    current.next = new Node(newDigit);
    current = current.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  return dummyHead.next;
}

// --- Ejemplos de Uso ---

// Ejemplo 1: Orden Inverso
console.log("--- Suma en Orden Inverso ---");
let l1_rev = createLinkedList([7, 1, 6]); // Representa 617
let l2_rev = createLinkedList([5, 9, 2]); // Representa 295
console.log("Lista 1: 617");
printLinkedList(l1_rev);
console.log("Lista 2: 295");
printLinkedList(l2_rev);
let sum_rev = sumListsReverse(l1_rev, l2_rev); // Resultado: 912
console.log("Suma: 912");
printLinkedList(sum_rev); // Salida: 2 -> 1 -> 9
