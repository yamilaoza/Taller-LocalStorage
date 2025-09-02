// Obtenemos elementos del DOM
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

// Escuchamos el click en el botón
buttonText.addEventListener("click", () => {
  const valor = inputText.value; // obtenemos lo que el usuario escribió

  if (valor.trim() !== "") {
    // Guardamos el valor en localStorage bajo la clave "dato"
    localStorage.setItem("dato", valor);

    // Limpiamos el input
    inputText.value = "";
  } else {
    console.log("El input está vacío");
  }
});
