// Importar Firebase SDK e inicializar Firebase
import firebase from './js/firebase.js';

// Obter elementos do formulário
const formCriarConta = document.getElementById('form-criar-conta');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmar-senha');

// Listener para o evento submit
formCriarConta.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validar campos
  const nome = nomeInput.value;
  const email = emailInput.value;
  const senha = senhaInput.value;
  const confirmarSenha = confirmarSenhaInput.value;

  if (!nome || !email || !senha || !confirmarSenha) {
    alert('Preencha todos os campos!');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  // Criar novo usuário no Firebase
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      // Usuário criado com sucesso!
      alert('Conta criada com sucesso!');
      // Redirecionar para outra página ou exibir mensagem de boas-vindas
    })
    .catch((error) => {
      // Erro ao criar usuário
      alert('Erro ao criar conta: ' + error.message);
    });
});
