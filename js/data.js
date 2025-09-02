// Obtenemos el span
const dataSpan = document.getElementById("data");

// Recuperamos el valor guardado
const valorGuardado = localStorage.getItem("dato");

// Si existe un valor, lo mostramos, si no mostramos un mensaje
if (valorGuardado) {
  dataSpan.textContent = valorGuardado;
} else {
  dataSpan.textContent = "No hay datos guardados";
}
