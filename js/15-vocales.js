/*15- Realiza un script que cuente el número de vocales que tiene un texto.
 */

let vocales = prompt("ingrese un texto");

let contadorVocales = 0;

// Recorrer cada carácter del texto
for (let i = 0; i < vocales.length; i++) {
  // Obtener el carácter actual
  const caracter = vocales[i].toLowerCase();

  // Usar switch para contar las vocales
  switch (caracter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      contadorVocales++; // Incrementar el contador si es una vocal
      break;
  }
}

// Mostrar el resultado
document.write("Su texto tiene " + contadorVocales + " vocal(es).");
