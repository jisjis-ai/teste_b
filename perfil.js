firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const uid = user.uid;
      const usuarioRef = firebase.database().ref('Conta/' + uid);
  
      usuarioRef.once('value').then(function(snapshot) {
        const nome = snapshot.val().nome;
  
        // Obtenha o elemento <h2>
        const userNameElement = document.getElementById('user-name');
  
        // Verifique se o nome do usuário está definido
        if (nome) {
          // Atribua o nome do usuário ao elemento <h2>
          userNameElement.textContent = nome;
        }
      }).catch(function(error) {
        // Tratamento de erros, se necessário
      });
    } else {
      window.location.href = "login.html";
    }
  });
  


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const uid = user.uid;
      const usuarioRef = firebase.database().ref('Conta/' + uid);
  
      usuarioRef.once('value').then(function(snapshot) {
        const nome = snapshot.val().nome;
        const tipoConta = snapshot.val().tipo;
        const diasAcesso = snapshot.val().dias;
  
        // Obtenha o elemento <h2>
        const userNameElement = document.getElementById('user-name');
  
        // Verifique se o nome do usuário está definido
        if (nome) {
          // Atribua o nome do usuário ao elemento <h2>
          userNameElement.textContent = nome;
        }
  
        // Verifique se o tipo de conta está definido
        if (tipoConta) {
          document.getElementById('account-type').textContent = tipoConta;
        }
  
        // Verifique se o número de dias de acesso está definido
        if (diasAcesso) {
          document.getElementById('access-days').textContent = diasAcesso + " dias";
        }
      }).catch(function(error) {
        // Tratamento de erros, se necessário
      });
    } else {
      window.location.href = "login.html";
    }
  });
  



