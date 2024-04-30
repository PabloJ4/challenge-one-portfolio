//Seu JavaScript de validação aqui
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("spero um e-mail, querida!");
  } else {
    email.setCustomValidity("");
  }
});