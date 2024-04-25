document.addEventListener('DOMContentLoaded', function() {
    const verMasBtn = document.getElementById('verMasBtn');
    const todosViajesDiv = document.getElementById('todosViajes');
    const todosViajesLista = document.getElementById('todosViajesLista');

    // Array de objetos de viajes (solo como ejemplo)
    const viajes = [
        { 'duracion': '20 horas', 'fecha': '2024-01-15', 'origen': 'Lima', 'destino': 'Tarapoto', 'conductor': 'Juan Pérez' },
        { 'duracion': '9.5 horas', 'fecha': '2024-02-14', 'origen': 'Arequipa', 'destino': 'Chiclayo', 'conductor': 'María García' },
        { 'duracion': '10 horas', 'fecha': '2024-03-10', 'origen': 'Cancun', 'destino': 'Panama', 'conductor': 'Luis Gonzales' },
        { 'duracion': '7.5 horas', 'fecha': '2024-04-11', 'origen': 'Chile', 'destino': 'Bolivia', 'conductor': 'Joel Maldini' },
        { 'duracion': '11 horas', 'fecha': '2024-05-12', 'origen': 'Colombia', 'destino': 'Brasil', 'conductor': 'Jhon Smith' },
        { 'duracion': '22 horas', 'fecha': '2024-06-21', 'origen': 'Francia', 'destino': 'Suiza', 'conductor': 'Marco Andrade' },
        { 'duracion': '8 horas', 'fecha': '2024-07-27', 'origen': 'Rusia', 'destino': 'Polonia', 'conductor': 'Jose Flores' },
        { 'duracion': '6 horas', 'fecha': '2024-08-28', 'origen': 'Alemania', 'destino': 'Luxemburgo', 'conductor': 'Mario Vargas' },
        { 'duracion': '12 horas', 'fecha': '2024-09-29', 'origen': 'Londres', 'destino': 'Dinamarca', 'conductor': 'Paolo Guerro' },
        { 'duracion': '23 horas', 'fecha': '2024-10-30', 'origen': 'Australia', 'destino': 'Chile', 'conductor': 'Miguel Savedra' },
        
    ];
    

    // Función para mostrar los últimos 4 viajes
    function mostrarUltimosViajes() {
        const ultimosViajes = viajes.slice(-4); // Obtener los últimos 4 viajes del array
        const ultimosViajesHTML = ultimosViajes.map(viaje => `<li>${viaje.duracion} - ${viaje.fecha} - ${viaje.origen} a ${viaje.destino} - Conductor: ${viaje.conductor}</li>`).join('');
        document.getElementById('ultimosViajes').innerHTML = ultimosViajesHTML;
    }

    // Función para mostrar todos los viajes
    function mostrarTodosViajes() {
        const todosViajesHTML = viajes.map(viaje => `<li>${viaje.duracion} - ${viaje.fecha} - ${viaje.origen} a ${viaje.destino} - Conductor: ${viaje.conductor}</li>`).join('');
        todosViajesLista.innerHTML = todosViajesHTML;
        todosViajesDiv.style.display = 'block';
        verMasBtn.style.display = 'none'; // Ocultar el botón "Ver más" después de hacer clic
    }

    // Mostrar los últimos 4 viajes al cargar la página
    mostrarUltimosViajes();

    // Manejar el clic en el botón "Ver más"
    verMasBtn.addEventListener('click', function() {
        mostrarTodosViajes();
    });
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