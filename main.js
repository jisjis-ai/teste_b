// main.js
import { auth, fbU, transacoes, users } from 'firebase.js';

// Restante do seu código
// ...

// Função para executar quando o usuário sai do site
function onBeforeUnloadHandler() {
  // Seu código aqui
  console.log('Usuário saindo do site. Executar código...');

  // Crie um objeto de dados para atualização
  const map = {
    "status": "offline",
    "visto": "visto por último ".concat(new SimpleDateFormat("dd/MM/yy").format(calendar.getTime()).concat(" As ".concat(new SimpleDateFormat("HH:mm:ss").format(calendar.getTime())))),
    "saldo": String.valueOf((long)(saldo_ - 2))
  };

  // Atualize os dados no nó do usuário no Firebase Realtime Database
  fbU.child(auth.currentUser.uid).updateChildren(map);

  // Atualize os mesmos dados no nó "users" no Firebase Realtime Database
  users.child(auth.currentUser.uid).updateChildren(map);

  // Limpa o objeto de dados
  map.clear();
}

// Função para executar quando o usuário volta para o site
function onLoadHandler() {
  // Seu código aqui
  console.log('Usuário voltando para o site. Executar código...');

  // Crie um objeto de dados para atualização
  const map = {
    "msg": "Compra de 2 (💎) na entidade MozServer em ".concat(new SimpleDateFormat("dd/MM/yy").format(calendar.getTime()).concat(" as ".concat(new SimpleDateFormat("HH:mm:ss").format(calendar.getTime()).concat(" Novo Saldo em diamante da hackerbets é de: ".concat(String.valueOf((long)(saldo_)))))))
  };

  // Atualize os dados da transação no nó do usuário no Firebase Realtime Database
  transacoes.child(auth.currentUser.uid).updateChildren(map);
}

// Adiciona um ouvinte de evento para o evento beforeunload
window.addEventListener('beforeunload', onBeforeUnloadHandler);

// Adiciona um ouvinte de evento para o evento load
window.addEventListener('load', onLoadHandler);
