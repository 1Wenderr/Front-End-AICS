function mostrarSenha() {
  const campo = document.getElementById("senha");
  campo.type = campo.type === "password" ? "text" : "password";
}
function mostrarSenhaNovamente() {
  const campo = document.getElementById("senhaNovamente");
  campo.type = campo.type === "password" ? "text" : "password";
}

$(document).ready(function() {
  $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');

  });
});