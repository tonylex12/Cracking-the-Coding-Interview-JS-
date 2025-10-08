// --- Estructura y Helpers ---
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Encuentra el nodo inicial de un ciclo en una lista enlazada.
 * Usa el algoritmo de Floyd's Cycle Detection (Tortoise and Hare).
 *
 * Algoritmo: Floyd's Cycle Detection
 * - Fase 1: Detecta si hay un ciclo usando dos punteros a diferentes velocidades
 * - Fase 2: Encuentra el inicio del ciclo reiniciando un puntero al inicio
 *
 * Complejidad:
 * - Tiempo: O(n)
 * - Espacio: O(1)
 *
 * @param {Node} head La cabeza de la lista.
 * @returns {Node | null} El nodo inicial del ciclo o null si no hay ciclo.
 */
function findLoopStart(head) {
  let slow = head;
  let fast = head;

  // --- Paso 1: Detectar la colisión ---
  // Mueve los punteros hasta que se encuentren o el rápido llegue al final.
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // Colisión detectada, ¡hay un ciclo!
      break;
    }
  }

  // Si el bucle terminó porque fast llegó al final, no hay ciclo.
  if (fast === null || fast.next === null) {
    return null;
  }

  // --- Paso 2: Encontrar el inicio del ciclo ---
  // Reinicia el puntero lento al inicio de la lista.
  slow = head;

  // Mueve ambos punteros un paso a la vez hasta que se encuentren de nuevo.
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // El punto de encuentro es el inicio del ciclo.
  return fast;
}

// --- Ejemplo de Uso ---
// Creamos una lista: A -> B -> C -> D -> E -> C (el ciclo empieza en C)
let head = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");

head.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeC; // <-- Aquí creamos el ciclo

const loopStartNode = findLoopStart(head);

if (loopStartNode) {
  console.log(
    `Se encontró un ciclo que empieza en el nodo con el valor: ${loopStartNode.data}`
  );
} else {
  console.log("No se encontró ningún ciclo en la lista.");
}
// Salida: Se encontró un ciclo que empieza en el nodo con el valor: C
