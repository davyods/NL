document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha o valor do e-mail do input
    var email = document.getElementById('emailInput').value;

    // Envie o e-mail para um servidor ou faça qualquer processamento adicional
    // Aqui, estamos apenas imprimindo o e-mail no console do navegador
    console.log('E-mail assinado:', email);

    // Limpe o campo de entrada de e-mail
    document.getElementById('emailInput').value = '';

    // Exiba uma mensagem de sucesso
    alert('Obrigado por assinar a nossa newsletter!');
  });