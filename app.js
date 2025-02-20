// Creando JS para darle funcionalidad a la app
// Array para almacenar los nombres de los amigos

let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');   // Obtiene el valor del input
    const nombreAmigo = inputAmigo.value.trim(); // Elimina los espacios en blanco al inicio y al final
// Validando que el input no este vacío
    
    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return;
    }

    // Validar que el nombre ingresado no esté duplicado en el array
    if (amigos.includes(nombreAmigo)) {
        alert(`El amigo ${nombreAmigo} ya está en la lista`); // Muestra una alerta si el nombre ya existe
        return; // Detiene la ejecución de la función
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto después de agregar el nombre
    inputAmigo.value = ""; 

    // Llamar a la función para actualizar la lista en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento UL donde se mostrarán los nombres
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de actualizarla para evitar duplicados
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos en la lista antes de hacer el sorteo
    if (amigos.length === 0) {
        alert('No hay amigos en la lista'); // Muestra una alerta si la lista está vacía
        return; // Detiene la ejecución de la función
    }

    // Generar un índice aleatorio dentro del rango del array 'amigos'
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre del amigo sorteado en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}