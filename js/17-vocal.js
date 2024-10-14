/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Introduce un texto:");

// Inicializar una variable para almacenar la posición de la primera vocal
let posicionVocal = -1;

// Definir las vocales
const vocales = "aeiouAEIOU";

// Recorrer cada carácter del texto
for (let i = 0; i < texto.length; i++) {
  // Comprobar si el carácter actual es una vocal
  if (vocales.includes(texto[i])) {
    posicionVocal = i; // Almacenar la posición de la primera vocal
    break; // Salir del bucle al encontrar la primera vocal
  }
}

// Mostrar el resultado
if (posicionVocal !== -1) {
  document.write(
    `La vocal '${texto[posicionVocal]}' está en la posición ${posicionVocal}.`
  );
} else {
  document.write("No se encontraron vocales en el texto.");
}
