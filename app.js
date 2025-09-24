const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
function agregarAmigo(){
    
      const nombre = inputAmigo.value.trim();

    // Validar entrada vacía
    if (!nombre) {
        alert(" Por favor, inserte un nombre.");
        return;
    }

    // Validar duplicados
    if (listaAmigos.includes(nombre)) {
        alert(" Este nombre ya fue agregado.");
        inputAmigo.value = "";
        return;
    }

    // Agregar a la lista
    listaAmigos.push(nombre);

    // Actualizar lista visual
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);

    // Limpiar input
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert(" La lista está vacía. Agrega al menos un amigo.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    ulResultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}