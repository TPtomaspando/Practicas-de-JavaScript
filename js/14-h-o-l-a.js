/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let texto = prompt("ingrese un texto");

let resultado = "";
let i = 0;

while (i < texto.length) {
  resultado += texto[i];
  if (i < texto.length - 1) {
    resultado += "-";
  }
  i++;
}

document.write(resultado);
