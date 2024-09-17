document.addEventListener("DOMContentLoaded", function () {
  var ctx1 = document.getElementById("graficoVendasSemana").getContext("2d");
  var graficoVendasSemana = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo",
      ],
      datasets: [
        {
          label: "Vendas Semanais",
          data: [30, 45, 50, 60, 70, 90, 100],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var ctx2 = document
    .getElementById("graficoProdutosPercentual")
    .getContext("2d");
  var graficoProdutosPercentual = new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels: ["Categoria 1", "Categoria 2", "Categoria 3"],
      datasets: [
        {
          label: "Percentual de Produtos",
          data: [40, 30, 30],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  var ctx3 = document
    .getElementById("graficoCrescimentoSemanal")
    .getContext("2d");
  var graficoCrescimentoSemanal = new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Crescimento Semanal",
          data: [65, 59, 90, 81],
          fill: false,
          borderColor: "rgba(153, 102, 255, 1)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var ctx4 = document.getElementById("graficoAlcanceVendas").getContext("2d");
  var graficoAlcanceVendas = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Alcance de Vendas",
          data: [70, 85, 55, 90],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
