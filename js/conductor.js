document.addEventListener('DOMContentLoaded', function() {
    const usuariosAbordaron = document.getElementById('usuariosAbordaron');
    const montoTotalElement = document.getElementById('montoTotal');

    const viajes = [
        { usuario: 'Harry Styles', costo: 200 },
        { usuario: 'Taylor Swift', costo: 150 },
        { usuario: 'Olivia Rogrigo', costo: 3000 },
        { usuario: 'Louis Tomlinson', costo: 390 },
        { usuario: 'Zayn Malik', costo: 600 },
        { usuario: 'Niall Horan', costo: 450 },
        { usuario: 'Liam Payne', costo: 850 },
        { usuario: 'Sabrina Carpenter', costo: 570 },
        { usuario: 'Travis Scott', costo: 340 },
        { usuario: 'Joe Jonas', costo: 970 },
    ];

    const personasElement = document.getElementById("usuariosAbordaron");
    
    function writePersona() {
        let contenido = "";
        viajes.forEach(persona => {
            const template = `
                <div class="persona">
                    <div class="data">
                    <h4>${persona.usuario}</h4>
                    </div>
                    <div class="costo">
                    <h4>S/. ${persona.costo}</h4>
                    </div>
                </div>    
            `;
            contenido = contenido + template;
        });
        personasElement.innerHTML = contenido;
    
    }

    function calcularMontoTotal() {
        const montoTotal = viajes.reduce((total, viaje) => total + viaje.costo, 0);
        montoTotalElement.textContent = `Monto Total = ${montoTotal} soles`;
    }

    writePersona();
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

