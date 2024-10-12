//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

function concatenarCadenas() {
  let resultado = "";
  let continuar = true;

  while (continuar) {
    let cadena = prompt("Introduce una cadena de texto:");

    if (cadena !== null) {
      // Si no se presiona "Cancelar"
      // Concatenar la nueva cadena con un guión
      if (resultado) {
        resultado += " - "; // Añadir guión si ya hay texto
      }
      resultado += cadena; // Agregar la nueva cadena

      // Preguntar si desea continuar
      continuar = confirm("¿Deseas introducir otra cadena?");
    } else {
      continuar = false; // Termina el bucle si se presiona "Cancelar"
    }
  }

  alert("Cadenas concatenadas: " + resultado);
}

// Llamar a la función para ejecutar el script
concatenarCadenas();
