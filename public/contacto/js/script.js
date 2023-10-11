// Script para validar el formulario de la página de contacto
var nombre = document.getElementById('fullName');
var email = document.getElementById('email');
var tel = document.getElementById('telefono');
var msj = document.getElementById('mensaje');
var fail = document.getElementById('fail');
var success = document.getElementById('success');

//expresion regular para nombres y mail
var regexNom = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
var regexEmail = /^\S+@\S+\.\S+$/;

var errorsAmount;
function sendForm() {
  errorsAmount = 0;
  var errorMessages = [];

  if (nombre.value === null || nombre.value.trim() === "") {
    errorMessages.push("Es necesario ingresar un nombre.");
    errorsAmount++;
  } else if (!regexNom.test(nombre.value)) {
    errorMessages.push("Debe ingresar caracteres válidos para su nombre.");
    errorsAmount++;
  }

  if (email.value === null || email.value.trim() === "") {
    errorMessages.push("Es necesario ingresar una dirección de correo.");
    errorsAmount++;
  } else if (!regexEmail.test(email.value)) {
    errorMessages.push("Debe ingresar un formato válido de email.");
    errorsAmount++;
  }

  if (tel.value === null || tel.value.trim() === "") {
    errorMessages.push("Es necesario ingresar un número de teléfono.");
    errorsAmount++;
  }else if (Number.isInteger(tel.value) || toString(tel.value).length > 10 || /^[0-9]/.test(toString(tel.value))) {
    errorMessages.push("Debe ingresar un formato válido de teléfono.");
    errorsAmount++;
  }

  if (msj.value === null || msj.value.trim() === "") {
    errorMessages.push("Es necesario ingresar un mensaje.");
    errorsAmount++;
  }else if (msj.value.length > 300) {
    errorMessages.push("Reduzca la cantidad de caracteres a 300, sea más conciso con su mensaje.");
    errorsAmount++;
  }

  fail.innerHTML = errorMessages.join(" ");

  if (errorsAmount === 0) {
    success.textContent="Enviado con éxito!";
  }
}