document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const botao = document.getElementById("botao");
    const inputs = document.querySelectorAll("#form input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
      }
    }

    alert("Dados enviados com sucesso!");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });
});
