class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Encuentra el k-ésimo elemento hasta el final de una lista enlazada.
 * @param {Node} head La cabeza de la lista.
 * @param {number} k La posición desde el final (k=1 es el último, k=2 el penúltimo, etc.).
 * @returns {Node | null} El nodo encontrado o null si no existe.
 */
function findKthToLast(head, k) {
  // Asegurémonos de que la entrada sea válida.
  if (!head || k <= 0) {
    return null;
  }

  let p1 = head; // Puntero adelantado o "runner"
  let p2 = head; // Puntero principal

  // 1. Mover p1 k pasos hacia adelante.
  for (let i = 0; i < k; i++) {
    // Si p1 llega al final antes de terminar los k pasos, la lista es muy corta.
    if (p1 === null) {
      return null;
    }
    p1 = p1.next;
  }

  // 2. Mover ambos punteros hasta que p1 llegue al final.
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // En este punto, p2 está en la posición deseada.
  return p2;
}

// --- Ejemplo de Uso ---
// Creamos la lista: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

const k = 3;
const kthNode = findKthToLast(head, k);

if (kthNode) {
  // El 3er elemento hasta el final es 5
  console.log(`El ${k}-ésimo nodo hasta el final es: ${kthNode.data}`);
} else {
  console.log(`No se pudo encontrar el nodo o la lista es muy corta.`);
}
// Salida: El 3-ésimo nodo hasta el final es: 5
