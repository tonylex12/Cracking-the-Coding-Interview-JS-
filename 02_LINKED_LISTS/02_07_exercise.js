// --- Estructura y Helpers ---
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class ListResult {
  constructor(tail, size) {
    this.tail = tail;
    this.size = size;
  }
}

/**
 * Encuentra la cola y el tamaño de una lista.
 * @param {Node} head La cabeza de la lista.
 * @returns {ListResult} Un objeto con la cola y el tamaño.
 */
function getTailAndSize(head) {
  if (head === null) return null;

  let size = 1;
  let current = head;
  while (current.next !== null) {
    size++;
    current = current.next;
  }
  return new ListResult(current, size);
}

/**
 * Determina si dos listas se intersectan y devuelve el nodo de intersección.
 * @param {Node} list1 La cabeza de la primera lista.
 * @param {Node} list2 La cabeza de la segunda lista.
 * @returns {Node | null} El nodo de intersección o null.
 */
function findIntersection(list1, list2) {
  // 1. Obtener la cola y el tamaño de cada lista.
  const result1 = getTailAndSize(list1);
  const result2 = getTailAndSize(list2);

  // Si alguna lista está vacía, no pueden intersectarse.
  if (result1 === null || result2 === null) {
    return null;
  }

  // 2. Si las colas son diferentes, no hay intersección.
  if (result1.tail !== result2.tail) {
    return null;
  }

  // 3. Establecer punteros para la lista más corta y más larga.
  let shorter = result1.size < result2.size ? list1 : list2;
  let longer = result1.size < result2.size ? list2 : list1;

  // 4. Avanzar el puntero de la lista más larga.
  const diff = Math.abs(result1.size - result2.size);
  for (let i = 0; i < diff; i++) {
    longer = longer.next;
  }

  // 5. Recorrer juntas hasta encontrar la intersección.
  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  // Los punteros ahora son iguales y apuntan al nodo de intersección.
  return longer;
}

// --- Ejemplo de Uso ---
// Creamos una sección común de una lista
let commonPart = new Node("D");
commonPart.next = new Node("E");
commonPart.next.next = new Node("F");

// Creamos la primera lista
let list1Head = new Node("A");
list1Head.next = new Node("B");
list1Head.next.next = new Node("C");
list1Head.next.next.next = commonPart; // Se une a la parte común

// Creamos la segunda lista
let list2Head = new Node("X");
list2Head.next = new Node("Y");
list2Head.next.next = commonPart; // Se une a la parte común

const intersectingNode = findIntersection(list1Head, list2Head);

if (intersectingNode) {
  console.log(
    `Las listas se intersectan en el nodo con el valor: ${intersectingNode.data}`,
  );
} else {
  console.log("Las listas no se intersectan.");
}
// Salida: Las listas se intersectan en el nodo con el valor: D
