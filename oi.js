// Inicialize o Firebase aqui

// Referência ao nó de usuários no banco de dados Firebase
const usersRef = firebase.database().ref('users');

// Referência ao elemento HTML da lista de usuários
const userList = document.getElementById('userList');

// Recupere os dados dos usuários
usersRef.on('value', (snapshot) => {
    const usersData = snapshot.val();
    const usersCount = Object.keys(usersData).length;

    // Limpe a lista de usuários antes de atualizá-la
    userList.innerHTML = '';

    // Atualize a lista de usuários
    for (const userId in usersData) {
        const user = usersData[userId];
        const listItem = document.createElement('li');
        listItem.textContent = `${user.nome}:  pagou ${usersCount * 500} MZN`;
        userList.appendChild(listItem);
    }

    // Calcule o lucro total da empresa
    const totalProfit = usersCount * 500;

    // Crie o gráfico de barras com o lucro total
    const ctx = document.getElementById('profitChart').getContext('2d');
    const profitChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Lucro Total'],
            datasets: [{
                label: 'Lucro (MZN)',
                data: [totalProfit],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
