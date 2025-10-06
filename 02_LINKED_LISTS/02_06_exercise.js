// --- Estructura y Helpers ---
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
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
 * Verifica si una lista enlazada es un palíndromo usando un stack.
 * @param {Node} head La cabeza de la lista.
 * @returns {boolean}
 */
function isPalindrome(head) {
  let slow = head;
  let fast = head;
  const stack = [];

  // 1. Empujar la primera mitad de la lista al stack.
  // El puntero rápido se usa para encontrar el medio.
  while (fast !== null && fast.next !== null) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Si la lista tiene un número impar de elementos, el del medio no importa.
  // Lo saltamos para empezar la comparación desde el siguiente.
  if (fast !== null) {
    slow = slow.next;
  }

  // 2. Comparar la segunda mitad con los elementos del stack.
  while (slow !== null) {
    const top = stack.pop();

    // Si los datos no coinciden, no es un palíndromo.
    if (top !== slow.data) {
      return false;
    }
    slow = slow.next;
  }

  // Si terminamos el bucle, es un palíndromo.
  return true;
}

// --- Ejemplos de Uso ---

const list1 = createLinkedList(["r", "a", "d", "a", "r"]);
const list2 = createLinkedList([1, 2, 3, 4, 5]);
const list3 = createLinkedList(["a", "b", "b", "a"]);

console.log(`¿Es 'radar' un palíndromo?`, isPalindrome(list1)); // Salida: true
console.log(`¿Es '12345' un palíndromo?`, isPalindrome(list2)); // Salida: false
console.log(`¿Es 'abba' un palíndromo?`, isPalindrome(list3)); // Salida: true
