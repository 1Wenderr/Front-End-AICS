function mostrarSenha() {
  const campo = document.getElementById("senha");
  campo.type = campo.type === "password" ? "text" : "password";
}
function mostrarSenhaNovamente() {
  const campo = document.getElementById("senhaNovamente");
  campo.type = campo.type === "password" ? "text" : "password";
}
