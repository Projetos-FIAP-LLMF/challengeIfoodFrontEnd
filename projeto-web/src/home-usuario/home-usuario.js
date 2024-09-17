// Função para animar a contagem dos números dos cartões
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
  
    const timer = setInterval(() => {
      current += increment;
      obj.innerText = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Atualizando valores dos cartões com animação
  animateValue("totalPedidos", 0, 2, 4000);
  animateValue("lucroTotal", 0, 50, 40000); // Animação mais lenta
  animateValue("avaliacaoMedia", 0, 4.5, 4000);
  animateValue("novosClientes", 0, 15, 40000);
  
  // Gráfico de Barras - Receita Total
  const ctxReceita = document.getElementById("graficoReceita").getContext("2d");
  new Chart(ctxReceita, {
    type: "bar",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
      datasets: [
        {
          label: "Receita Mensal",
          data: [678.9, 800.45, 950.3, 1020.4, 1100.5],
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: {
        duration: 1500,
      },
    },
  });
  
  // Gráfico de Linhas - Desempenho por Horário
  const ctxDesempenho = document
    .getElementById("graficoDesempenho")
    .getContext("2d");
  new Chart(ctxDesempenho, {
    type: "line",
    data: {
      labels: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
      datasets: [
        {
          label: "Pedidos por Hora",
          data: [12, 19, 15, 8, 10, 22],
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: {
        duration: 1500,
      },
    },
  });
  
  // Gráfico de Pizza - Distribuição de Marketing
  const ctxVisaoMarketing = document.getElementById('graficoVisaoMarketing').getContext('2d');
  new Chart(ctxVisaoMarketing, {
    type: 'pie',
    data: {
      labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
      datasets: [{
        label: 'Distribuição de Marketing',
        data: [30, 20, 25, 25],
        backgroundColor: [
          'rgba(128, 0, 128, 0.2)',  // Roxo claro
          'rgba(153, 50, 204, 0.2)', // Roxo médio
          'rgba(75, 0, 130, 0.2)',   // Roxo escuro
          'rgba(138, 43, 226, 0.2)'  // Roxo azulado
        ],
        borderColor: [
          'rgba(128, 0, 128, 1)',    // Roxo claro
          'rgba(153, 50, 204, 1)',  // Roxo médio
          'rgba(75, 0, 130, 1)',    // Roxo escuro
          'rgba(138, 43, 226, 1)'   // Roxo azulado
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw + '%';
            }
          }
        }
      }
    }
  });
  