function mostrarSenha() {
    const campo = document.getElementById("senha");
    campo.type = campo.type === "password" ? "text" : "password";
  }

  function pesquisar() {
      const termo = document.getElementById('busca').value;
      alert(`Você pesquisou por: ${termo}`);
    }