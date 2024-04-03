firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const uid = user.uid;
    const usuarioRef = firebase.database().ref('Conta/' + uid);

    usuarioRef.once('value').then(function(snapshot) {
      const nome = snapshot.val().nome;

      // Verifique se o nome do usuário está definido
      if (nome) {
        // Nome do usuário disponível, exiba o conteúdo
        document.getElementById('userName').textContent = nome;
        document.getElementById('contentContainer').style.display = 'block';
      } else {
        // Nome do usuário não disponível, oculte o conteúdo
        document.getElementById('contentContainer').style.display = 'none';
      }
    }).catch(function(error) {
      // Tratamento de erros, se necessário
    });
  } else {
    window.location.href = "login.html";
  }
});
