// Script para validar el formulario de la página de contacto
var name_ = document.getElementById('fullName'); // con _ porque generaba conflicto
var email = document.getElementById('email');
var pass = document.getElementById('password');

var fail = document.getElementById('fail');
var errorsAmount;
function sendForm(){
  errorsAmount = 0;
  var errorMessages = [];

  if (name_.value === null || name_.value === ""){
    errorMessages.push("Debes ingresar tu nombre");
    errorsAmount++;
  }
  if (pass.value === null || pass.value === ""){
    errorMessages.push("Debes ingresar una contraseña");
    errorsAmount++;
  }
  if (email.value === null || email.value === ""){
    errorMessages.push("Debes ingresar una dirección de correo.");
    errorsAmount++;
  }

  fail.innerHTML = errorMessages.join(", ");

  if (errorsAmount === 0) {
    alert("Enviado con éxito!");
  }

  return false;
}