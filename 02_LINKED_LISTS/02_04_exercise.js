class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Particiona una lista enlazada alrededor de un valor x.
 * @param {Node} head La cabeza de la lista original.
 * @param {number} x El valor de partición.
 * @returns {Node} La cabeza de la nueva lista particionada.
 */
function partition(head, x) {
  // Usar dummy nodes para simplificar la lógica
  let lessDummy = new Node(0);
  let greaterDummy = new Node(0);

  // Punteros para construir las listas
  let lessCurrent = lessDummy;
  let greaterCurrent = greaterDummy;

  let node = head;

  // 1. Recorrer la lista original y clasificar cada nodo
  while (node !== null) {
    const nextNode = node.next;
    // Desconectamos el nodo de la lista original para evitar ciclos
    node.next = null;

    if (node.data < x) {
      // Añadir el nodo a la lista de "menores"
      lessCurrent.next = node;
      lessCurrent = node;
    } else {
      // Añadir el nodo a la lista de "mayores o iguales"
      greaterCurrent.next = node;
      greaterCurrent = node;
    }
    node = nextNode;
  }

  // 2. Unir las dos listas
  lessCurrent.next = greaterDummy.next;

  // Retornar la cabeza real (saltando el dummy node)
  return lessDummy.next;
}

// --- Ejemplo de Uso ---

// Funciones auxiliares para el ejemplo
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

let list = createLinkedList([3, 5, 8, 5, 10, 2, 1]);
const partitionValue = 5;

console.log("Lista Original:");
printLinkedList(list);

let partitionedList = partition(list, partitionValue);

console.log(`\nLista Particionada alrededor de ${partitionValue}:`);
printLinkedList(partitionedList);
// Salida posible: 3 -> 2 -> 1 -> 5 -> 8 -> 5 -> 10
