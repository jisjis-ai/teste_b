// Função para verificar e redirecionar
function enter() {
    // Define o banco com a chave 'entrou' e valor 'sim'
    localStorage.setItem('banco', JSON.stringify({ entrou: 'sim' }));

    // Redireciona para a página de verificação após definir o valor no localStorage
    window.location.href = 'bots.html';
}

// Adicione um ouvinte de evento para o clique do botão, se necessário
// Isso é opcional, dependendo de onde você deseja chamar a função
document.addEventListener('DOMContentLoaded', function() {
    // Você pode chamar a função aqui ou em qualquer lugar necessário
    // verificarESeguir();
});
