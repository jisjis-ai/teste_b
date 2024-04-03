const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('password');
const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede a submissão padrão do formulário

  const email = emailInput.value;
  const senha = senhaInput.value;

  // Fazer login no Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(userCredential) {
      // Login bem-sucedido
      const user = userCredential.user;
      console.log('Usuário logado:', user);

      // Redirecionar o usuário para index.html
      window.location.href = "index.html";
    })
    .catch(function(error) {
      // Ocorreu um erro durante o login
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao fazer login:', errorCode, errorMessage);

      // Exibir mensagem de erro no HTML usando Swal
      Swal.fire({
        title: 'LOGIN ERROR🚫',
        html: 'Não foi possível fazer login. Verifique seu email ou senha e, caso não tenha uma conta, crie uma nova por 700.00 Mzn' +
          '<br><br>' +
          'Se o erro continuar, entre em contato com o suporte ou' +
          '<br><br>' +
          'Verifique sua conexão com a internet.' +
          '<br><br>' +
          'codigo de erro: ' + errorMessage,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Fechar',
        cancelButtonText: 'Criar conta'
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          window.location.href = 'Pagamentos.html';
        }
      });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Outras inicializações ou manipulações DOM podem ocorrer aqui
});
