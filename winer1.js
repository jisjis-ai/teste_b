let predictionInterval = 20000; // Intervalo padrão de 20 segundos

// Função para atualizar o texto dinâmico
function updateDynamicText() {
    const dynamicText = document.getElementById("dynamicText");
    const possibilities = ["Azul", "Roxo", "Rosa"];
    const randomPossibility = possibilities[Math.floor(Math.random() * possibilities.length)];
    let randomText = randomPossibility;

    // Correção: A probabilidade de "Rosa" agora é de 45.87%
    if (randomPossibility === "Rosa" || Math.random() <= 0.4587) {
        predictionInterval = 40000; // Intervalo de 40 segundos
    } else {
        predictionInterval = 20000; // Intervalo de 20 segundos
    }

    // Se for "Rosa," adiciona um valor aleatório e substitui "X" por "%"
    if (randomPossibility === "Rosa") {
        const randomPercentage = (Math.random() * (100 - 1.5) + 1.5).toFixed(2);
        randomText = `Rosa ${randomPercentage}%`;
    }

    dynamicText.textContent = randomText;

    setTimeout(updateDynamicText, predictionInterval); // Atualiza dinamicamente
}

// Função para definir o "Estado do Mercado" uma vez no início
function setMarketState() {
    const marketState = document.getElementById("marketState");
    const currentTime = new Date().getHours();
    let marketStateText;

    if (currentTime > 15) {
        marketStateText = `${(Math.random() * (90 - 60) + 60).toFixed(2)}%`;
    } else {
        marketStateText = `${(Math.random() * (60 - 40) + 40).toFixed(2)}%`;
    }

    marketState.textContent = `Estado do Mercado ${marketStateText}`;
}

// Chama a função para definir o "Estado do Mercado" uma vez no início
setMarketState();

// Inicia a atualização do texto dinâmico
setTimeout(updateDynamicText, predictionInterval);

// Função para abrir o diálogo personalizado quando o botão for clicado
document.getElementById("openDialogButton").addEventListener("click", function() {
    Swal.fire({
        title: 'Como usar o bot?',
        html: 'É importante entender que quando falamos em "rosa", não estamos garantindo que sempre será 100% rosa. Na verdade, a probabilidade de ser rosa é de 45.87%. Isso significa que em 45.87% das vezes, a opção será rosa, mas não é uma certeza absoluta.' +
            '<br><br>' +
            'Além disso, queremos lembrar que a vela pode ser de outras cores, como azul ou roxo, e essas cores terão suas próprias probabilidades de ocorrer. Por exemplo, a vela azul pode ter uma probabilidade diferente de 45.87%.' +
            '<br><br>' +
            'Se você deseja ter um controle mais preciso sobre as cores das velas ou aumentar suas chances de escolher uma cor específica, oferecemos a opção de adquirir um bot pago por apenas 500 MZN (Meticais Moçambicanos). Este bot pode ajudar a melhorar suas chances de obter a cor desejada de vela. Você pode entrar em contato conosco pelo WhatsApp no número 876219863 para obter mais informações. No entanto, pedimos que evite fazer ligações, pois isso pode resultar no bloqueio do número.',
        icon: 'info',
        confirmButtonText: 'Fechar'
    });
});