const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES DE USUARIO */
const credenciales = {
    cliente: { usuario: "cliente123", pass: "cliente123" },
    chofer: { usuario: "chofer456", pass: "chofer456" }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    
    // Verificar si es un chofer
    if (valueUsuario == credenciales.chofer.usuario) {
        if (valuePassword == credenciales.chofer.pass) {
            // Iniciar sesión como chofer
            location.href = "dashboard_conductor.html";
            localStorage.setItem("userLogueado", true);
        } else {
            mostrarError("Contraseña incorrecta");
        }
    }
    // Verificar si es un cliente
    else if (valueUsuario == credenciales.cliente.usuario) {
        if (valuePassword == credenciales.cliente.pass) {
            // Iniciar sesión como cliente
            location.href = "dashboard_usuario.html";
            localStorage.setItem("userLogueado", true);
        } else {
            mostrarError("Contraseña incorrecta");
        }
    }
    // Usuario no encontrado
    else {
        mostrarError("Usuario no encontrado");
    }
});

function mostrarError(mensaje) {
    Swal.fire({
        title: "ERROR",
        text: mensaje,
        icon: "error"
    });
}