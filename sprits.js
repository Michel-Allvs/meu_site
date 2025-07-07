 const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", () => {
      // Alterna entre mostrar e esconder
      if (mensagem.style.display === "none" || mensagem.style.display === "") {
        mensagem.style.display = "block";
      } else {
        mensagem.style.display = "none";
      }
    });



