

// Mensaje de bienvenida
Swal.fire("Repasando GitHub");

let numeroUno = 30;
let numeroDos = 20;

// Evaluar condición y mostrar alerta
if (numeroUno > numeroDos) {
  Swal.fire({
    icon: 'success',
    title: 'Resultado',
    text: 'Condición verdadera'
  });
} else {
  Swal.fire({
    icon: 'info',
    title: 'Resultado',
    text: 'Condición falsa'
  });
}
