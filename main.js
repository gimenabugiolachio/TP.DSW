// Validación del formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  const forms = document.querySelectorAll('form');

  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  'use strict';

  const form = document.getElementById("loginForm");

  // Validación y redirección al enviar el formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío del formulario

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    // Validar correo electrónico
    if (!email) {
      document.getElementById("email").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("is-invalid");
    }

    // Validar contraseña
    if (password.length < 6) {
      document.getElementById("password").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("password").classList.remove("is-invalid");
    }

    // Si todo es válido, redirigir
    if (isValid) {
      window.location.href = "inicio.html"; // Redirigir a la página de inicio
    }
  });

  // Habilitar o deshabilitar el botón según los campos
  document.addEventListener("input", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const submitButton = document.querySelector("button[type='submit']");

    if (email && password.length >= 6) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
});

