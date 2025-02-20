let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');   // Obtiene el valor del input
    const nombreAmigo = inputAmigo.value.trim(); // Elimina los espacios en blanco al inicio y al final
// Validando que el input no este vacío
    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return;
    }
}