(function () {
    'use strict';

    const form = document.getElementById('formContacto');
    const toastEl = document.getElementById('toastContacto');
    const toast = new bootstrap.Toast(toastEl);

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita que la página recargue

        // Validación nativa de Bootstrap
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Si el formulario es válido: mostrar toast y limpiar campos
        toast.show();
        form.reset();
        form.classList.remove('was-validated');
    });
})();