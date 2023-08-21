
// ------------------------------Modal Inicio Sesion-------------------------------

//Ejemplo de JavaScript de inicio para deshabilitar el envío de formularios si hay campos no válidos
(() => {
    'use strict'

    var nombreUsuario = document.getElementById('txt_usuario');

    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const formContact = document.querySelectorAll('.needs-validation')

    // Bucle sobre ellos y evitar la presentación
    Array.from(formContact).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // Muestra un mensaje de validación si el formulario es válido
                alert('Bienvenido ' + nombreUsuario.value);
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

//Cierra el modal
const myModal = document.querySelector('#modalLogin')
myModal.addEventListener('hidden.bs.modal', event => {
    return event.preventDefault() // evita que se muestre modal
})



// ------------------------------Validacion Contactanos-------------------------------

// Obtener el elemento del formulario
const formulario = document.getElementById('frm_contacto');

document.addEventListener('DOMContentLoaded', function () {
    // Agrega un evento 'submit' al formulario de Contacto
    document.querySelector('#btn_enviar').addEventListener('click', function (event) {
        event.preventDefault();

        var form = this.closest('form');

        // Verifica si el formulario es válido según las validaciones de Bootstrap
        if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add('was-validated');
        } else {

            // Obtener el valor ingresado por el usuario
            const nombre = formulario.elements['txt_Nombre'].value;
            const apellidos = formulario.elements['txt_Apellidos'].value;
            const usuario = formulario.elements['txt_Usuario'].value;
            const dir = formulario.elements['txt_Direccion'].value;
            const email = formulario.elements['txt_Email'].value;

            // Guardar los valores en localStorage
            localStorage.setItem('Nombre', nombre);
            localStorage.setItem('Apellidos', apellidos);
            localStorage.setItem('Usuario', usuario);
            localStorage.setItem('Direccion', dir);
            localStorage.setItem('Email', email);

            // Muestra un mensaje de validación si el formulario es válido
            alert('El mensaje se ha enviado, pronto nos contactaremos con usted.');
            //Redirige a la pagina principal
            window.location.href = '/Docs/index.html';
        }
    });
});



// ----------------------------Utilizacion de Local Storage--------------------------


// Cargar el valor guardado al cargar la página
window.addEventListener('load', function () {
    const Nombre = localStorage.getItem('Nombre');
    const Apellidos = localStorage.getItem('Apellidos');
    const Usuario = localStorage.getItem('Usuario');
    const Dir = localStorage.getItem('Direccion');
    const Email = localStorage.getItem('Email');

    if (Nombre) {
        // Si hay un valor guardado, mostrarlo en el campo de entrada
        formulario.elements['txt_Nombre'].value = Nombre;
        formulario.elements['txt_Apellidos'].value = Apellidos;
        formulario.elements['txt_Usuario'].value = Usuario;
        formulario.elements['txt_Direccion'].value = Dir;
        formulario.elements['txt_Email'].value = Email;
    }
});

// Función para borrar el valor guardado
function borrarDatos() {
    localStorage.removeItem('Nombre');
    localStorage.removeItem('Apellidos');
    localStorage.removeItem('Usuario');
    localStorage.removeItem('Dir');
    localStorage.removeItem('Email');

    //Limpiar formulario
    formulario.reset();

    alert('Se limpiaron todos los campos.');
}