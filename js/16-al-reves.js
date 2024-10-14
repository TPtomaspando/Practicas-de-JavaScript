/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */

const texto = prompt("ingrese un texto");

let resultado = "";

// Recorrer la cadena desde el final hasta el principio
for (let i = texto.length - 1; i >= 0; i--) {
  resultado += texto[i]; // Agregar cada carácter al resultado
}

document.write(resultado);
