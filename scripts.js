// Verificar a validade da assinatura
firebase.database().ref('Conta/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
    var validade = snapshot.val().validade;
    var currentTime = new Date().getTime();
    if (parseFloat(validade) > currentTime) {
        // Assinatura válida

        // Carregar PDF quando o DOM estiver pronto
        document.addEventListener('DOMContentLoaded', function() {
            carregarPDF('secreto.pdf');
        });

        function carregarPDF(nomeArquivo) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', nomeArquivo, true);
            xhr.responseType = 'blob';
            xhr.onload = function(e) {
                if (this.status == 200) {
                    var blob = new Blob([this.response], { type: 'application/pdf' });
                    var objectURL = URL.createObjectURL(blob);
                    var embed = document.createElement('embed');
                    embed.src = objectURL;
                    embed.width = '100%';
                    embed.height = '600px';
                    document.getElementById('pdf-container').appendChild(embed);
                }
            };
            xhr.send();
        }
   
        // Também inserir o PDF diretamente (opcional)
        document.getElementById('pdf-container').innerHTML = "<embed src='secreto.pdf' width='100%' height='600px' />";
    } else {
        // Assinatura expirada
        var dialog = document.createElement('div');
        dialog.id = 'dialog';
        dialog.innerHTML = '<p>Sua assinatura expirou. Por favor, renove sua assinatura para continuar utilizando.</p>';
        document.body.appendChild(dialog);
        document.body.style.overflow = 'hidden'; // Impede que o usuário role a página
    }
}).catch(function(error) {
    console.log(error.message);
});

// Obter e exibir o email do usuário
var userEmail = firebase.auth().currentUser.email;
document.getElementById('e-mail').innerText = "Email: " + userEmail;

// Botão de logout
document.getElementById('logout-btn').addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        // Logout bem sucedido
        window.location.replace("login.html"); // Redirecionar para a página de login
    }).catch(function(error) {
        console.log(error.message);
    });
});
