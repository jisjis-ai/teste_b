// Espera o carregamento do DOM antes de verificar o localStorage
document.addEventListener('DOMContentLoaded', function () {
    // Obtém o valor do banco
    const bancoValue = JSON.parse(localStorage.getItem('banco'));

    // Verifica se a chave 'entrou' é igual a 'sim'
    if (bancoValue && bancoValue.entrou === '') {
        console.log('Entrou! Permanecendo na página.');
    } else {
        console.log('Não entrou ou valor diferente. Redirecionando para Index Page.');
        
    }
});
