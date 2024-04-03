// verificarAssinatura.js

// Chamar a função de verificação de assinatura assim que a página for carregada
verificarAssinatura();

// Definição da função verificarAssinatura
function verificarAssinatura() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref('Conta/' + user.uid).once('value').then(function(snapshot) {
                var userData = snapshot.val();
                if (userData) {
                    if (userData.validade) {
                        var validade = parseFloat(userData.validade);
                        var currentTime = new Date().getTime();
                        if (validade < currentTime) {
                            // Assinatura expirada, exibir diálogo
                            exibirDialogo("Sua assinatura expirou. Por favor, renove sua assinatura para continuar utilizando.");
                        } else {
                            console.log("A assinatura está válida.");
                        }
                    } else {
                        // Chave 'validade' não existe no banco de dados para este usuário
                        exibirDialogo(" não existe no banco de dados para este usuário. Por favor, compre uma conta válida.");
                    }
                } else {
                    // Dados do usuário não existem no banco de dados
                    exibirDialogo("Dados do usuário não encontrados. Por favor, compre uma conta válida.");
                }
            }).catch(function(error) {
                console.log("Erro ao acessar o banco de dados:", error.message);
            });
        } else {
            // Usuário não autenticado, redirecionar para a página de login
            console.log("Usuário não autenticado. Redirecionando para a página de login.");
            window.location.replace("login.html");
        }
    });
}

// Função para exibir o diálogo na tela
function exibirDialogo(mensagem) {
    // Criar o fundo semitransparente
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '1000';
    document.body.appendChild(overlay);

    // Criar o diálogo
    var dialog = document.createElement('div');
    dialog.id = 'dialog';
    dialog.style.position = 'fixed';
    dialog.style.top = '50%';
    dialog.style.left = '50%';
    dialog.style.transform = 'translate(-50%, -50%)';
    dialog.style.backgroundColor = '#fff';
    dialog.style.padding = '20px';
    dialog.style.borderRadius = '10px';
    dialog.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    dialog.innerHTML = `
        <p style="color: #ff3333; font-size: 18px; font-weight: bold;">Conta Banida!</p>
        <p style="color: #333; font-size: 16px;">${mensagem}</p>
        <button id="renew-button" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 20px;">Renovar Assinatura</button>
    `;
    document.body.appendChild(dialog);

    // Adicionar evento de clique ao botão de renovar assinatura
    document.getElementById('renew-button').addEventListener('click', function() {
        // Deslogar o usuário
        firebase.auth().signOut().then(function() {
            // Logout bem sucedido, redirecionar para a página de pagamentos
            window.location.href = "pagamentos.html";
        }).catch(function(error) {
            console.log("Erro ao fazer logout:", error.message);
        });
    });
}
