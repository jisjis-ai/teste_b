// Função para obter o saldo do usuário a partir do Firebase
function obterSaldoUsuario() {
    // Adicione o código para verificar se o usuário está autenticado
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Usuário está autenticado, obtenha o UID
            const uid = user.uid;

            // Referência ao nó do usuário no Firebase
            const usuarioRef = firebase.database().ref('users/' + uid);

            // Obtenha o valor do saldo
            usuarioRef.child('saldo').once('value').then((snapshot) => {
                const saldo = snapshot.val();
                document.getElementById('saldoUsuario').innerText = '💎' + saldo + '💎';
            }).catch((error) => {
                console.error('Erro ao obter saldo:', error);
            });
        } else {
            console.log('Usuário não está autenticado.');
        }
    });
}

// Função para redirecionar para a página "entrar.html"
function redirecionarParaEntrar() {
    window.location.href = 'entrar.html';
}
