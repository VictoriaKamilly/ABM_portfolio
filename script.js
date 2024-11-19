// Função de validação simples para o formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Mensagem enviada com sucesso!"); // Exibe uma mensagem de sucesso
      // Aqui você pode adicionar código para enviar o formulário para um servidor, se necessário
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
  