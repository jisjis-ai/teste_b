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
    });
});
