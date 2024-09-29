// Datos iniciales: destinos turísticos disponibles
const destinos = [
    { nombre: "París", categoria: "Internacional" },
    { nombre: "Tokio", categoria: "Internacional" },
    { nombre: "Cancún", categoria: "Playa" },
    { nombre: "Bariloche", categoria: "Montaña" },
    { nombre: "Nueva York", categoria: "Internacional" },
    { nombre: "Isla Mujeres", categoria: "Playa" },
    { nombre: "Machu Picchu", categoria: "Histórico" },
    { nombre: "Roma", categoria: "Histórico" },
    { nombre: "Aspen", categoria: "Montaña" },
    { nombre: "Miami", categoria: "Playa" },
    { nombre: "Londres", categoria: "Internacional" },
    { nombre: "Los Cabos", categoria: "Playa" },
    { nombre: "Salzburgo", categoria: "Montaña" },
    { nombre: "Atenas", categoria: "Histórico" }
];

// Función para filtrar destinos por categoría
const filtrarPorCategoria = (categoria) => {
    return destinos.filter(destino => destino.categoria.toLowerCase() === categoria.toLowerCase());
};

// Función para mostrar los destinos filtrados
const mostrarDestinos = (destinosFiltrados, categoria) => {
    const listaDestinos = document.getElementById('lista-destinos');
    listaDestinos.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos resultados

    // Eliminar cualquier mensaje previo
    const mensajesPrevios = document.querySelectorAll('.mensaje-divertido');
    mensajesPrevios.forEach(mensaje => mensaje.remove());

    if (destinosFiltrados.length === 0) {
        mostrarMensajeDivertido();
        return;
    }

    // Mostrar mensaje según la categoría
    mostrarMensajePorCategoria(categoria);

    // Mostrar los destinos filtrados
    destinosFiltrados.forEach(destino => {
        const li = document.createElement('li');
        li.textContent = destino.nombre;
        listaDestinos.appendChild(li);
    });
};

// Función para mostrar un mensaje si no se encuentran destinos
const mostrarMensajeDivertido = () => {
    const listaDestinos = document.getElementById('lista-destinos');
    listaDestinos.innerHTML = `<li class="mensaje-divertido">Sin resultados. ¡Explora nuevos destinos!</li>`;
};

// Función para mostrar un mensaje según la categoría seleccionada
const mostrarMensajePorCategoria = (categoria) => {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('mensaje-divertido');
    const listaDestinos = document.getElementById('lista-destinos');

    // Mensajes personalizados para cada categoría
    let mensaje = '';
    switch (categoria.toLowerCase()) {
        case 'internacional':
            mensaje = "¡Pasaporte listo! ✈️";
            break;
        case 'playa':
            mensaje = "¡Sol y playa! 🏖️";
            break;
        case 'montaña':
            mensaje = "¡Aventura en las alturas! 🏔️";
            break;
        case 'histórico':
            mensaje = "¡Historia viva! 🏛️";
            break;
        default:
            mensaje = "¡Destino único por descubrir!";
            break;
    }

    // Insertar el mensaje antes de la lista de destinos
    mensajeDiv.textContent = mensaje;
    listaDestinos.parentNode.insertBefore(mensajeDiv, listaDestinos);
};

// Manejamos el envío del formulario
document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evitar que el formulario recargue la página
    const categoria = document.getElementById('categoria').value;

    // Filtrar y mostrar los destinos
    const destinosFiltrados = filtrarPorCategoria(categoria);
    mostrarDestinos(destinosFiltrados, categoria);
});

// CSS para aplicar los colores
const style = document.createElement('style');
style.innerHTML = `
    body {
        color: black;
        background-color: grey;
    }
    .mensaje-divertido {
        color: white;
        font-weight: bold;
    }
    #lista-destinos li {
        color: black;
    }
`;
document.head.appendChild(style);
