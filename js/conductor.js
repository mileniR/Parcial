document.addEventListener('DOMContentLoaded', function() {
    const usuariosAbordaron = document.getElementById('usuariosAbordaron');
    const montoTotalElement = document.getElementById('montoTotal');

    // Array de objetos simulando los datos de los viajes
    const viajes = [
        { usuario: 'Harry Styles', costo: 200 },
        { usuario: 'Taylor Switf', costo: 150 },
        { usuario: 'Olivia Rogrigo', costo: 3000 },
        { usuario: 'Louis Tomlinson', costo: 390 },
        { usuario: 'Zayn Malik', costo: 600 },
        { usuario: 'Niall Horan', costo: 450 },
        { usuario: 'Liam Payne', costo: 850 },
        { usuario: 'Sabrina Carpentes', costo: 570 },
        { usuario: 'Travis Scott', costo: 340 },
        { usuario: 'Joe Jonas', costo: 970 },
    ];

    // Función para mostrar la lista de usuarios que más abordaron el vehículo
    function mostrarUsuariosAbordaron() {
        const usuarios = viajes.map(viaje => viaje.usuario).join(', ');
        usuariosAbordaron.textContent = usuarios;
    }

    // Función para calcular el monto total de los viajes realizados
    function calcularMontoTotal() {
        const montoTotal = viajes.reduce((total, viaje) => total + viaje.costo, 0);
        montoTotalElement.textContent = `Monto Total =${montoTotal} soles`;
    }

    // Mostrar la lista de usuarios y el monto total al cargar la página
    mostrarUsuariosAbordaron();
    calcularMontoTotal();
});



//verificar si se esta logueado
function verificarAutenticacion() {
    if (!localStorage.getItem("userLogueado")) {
        location.href = "login.html";
    }
}
verificarAutenticacion();

//para salir 
document.getElementById("salir").addEventListener('click', function () {
    localStorage.removeItem("userLogueado");
    location.href = "login.html";
});

