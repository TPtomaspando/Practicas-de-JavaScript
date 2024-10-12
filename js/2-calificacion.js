/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

function evaluarNota() {
  let nota = prompt("Introduce una nota (0 a 10):");

  // Verificamos si el valor ingresado es un número
  if (isNaN(nota)) {
    alert("Introduce un número válido");
  } else {
    // Convertimos la entrada a número
    nota = Number(nota);

    // Verificamos si el número está en el rango adecuado
    if (nota < 0 || nota > 10) {
      alert("Número erróneo");
    } else {
      // Evaluamos la calificación
      let calificacion;
      if (nota <= 2) {
        calificacion = "Muy deficiente";
      } else if (nota <= 4) {
        calificacion = "Insuficiente";
      } else if (nota <= 6) {
        calificacion = "Suficiente";
      } else if (nota === 7) {
        calificacion = "Bien";
      } else if (nota <= 9) {
        calificacion = "Notable";
      } else {
        // nota === 10
        calificacion = "Sobresaliente";
      }
      alert(calificacion);
    }
  }
}

// Llamar a la función para ejecutar el programa
evaluarNota();
