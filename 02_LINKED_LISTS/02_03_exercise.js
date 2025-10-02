class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Elimina un nodo de una lista enlazada dado solo acceso a ese nodo.
 * Asume que el nodo no es el último de la lista.
 * @param {Node} nodeToDelete El nodo que se debe eliminar.
 */
function deleteMiddleNode(nodeToDelete) {
  // Verificaciones para un código robusto.
  // El truco no funciona si el nodo es nulo o es el último.
  if (nodeToDelete === null || nodeToDelete.next === null) {
    return; // No se puede eliminar el último nodo con este método.
  }

  // 1. Copiamos los datos del siguiente nodo al nodo actual.
  const nextNode = nodeToDelete.next;
  nodeToDelete.data = nextNode.data;

  // 2. Saltamos el siguiente nodo, eliminándolo efectivamente de la lista.
  nodeToDelete.next = nextNode.next;
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
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Creamos la lista: a -> b -> c -> d -> e -> f
let head = createLinkedList(["a", "b", "c", "d", "e", "f"]);
// Obtenemos una referencia directa al nodo 'c' (el tercer nodo)
let nodeC = head.next.next;

console.log("Lista Original:");
printLinkedList(head);

// Eliminamos el nodo 'c' usando nuestra función
deleteMiddleNode(nodeC);

console.log("Lista Modificada:");
printLinkedList(head);
// Salida: a -> b -> d -> e -> f
