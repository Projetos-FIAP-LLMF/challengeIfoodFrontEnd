const ctx1 = document.getElementById('revenue-chart').getContext('2d');
const revenueChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Oct', 'Nov', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Receita',
            data: [1000, 2000, 3000, 4000, 5000],
            backgroundColor: ['rgba(92, 92, 230, 0.5)']
        }]
    }
});

const ctx2 = document.getElementById('performance-chart').getContext('2d');
const performanceChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        datasets: [{
            label: 'Pedidos realizados',
            data: [5, 15, 25, 30, 20, 40, 50],
            borderColor: 'rgba(92, 92, 230, 1)',
            backgroundColor: 'rgba(92, 92, 230, 0.1)',
            fill: true
        }]
    }
});

const ctx3 = document.getElementById('marketing-chart').getContext('2d');
const marketingChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'],
        datasets: [{
            label: 'Marketing',
            data: [40, 30, 20, 10],
            backgroundColor: [
                'rgba(92, 92, 230, 0.7)',
                'rgba(92, 92, 230, 0.6)',
                'rgba(92, 92, 230, 0.5)',
                'rgba(92, 92, 230, 0.4)'
            ]
        }]
    }
});
