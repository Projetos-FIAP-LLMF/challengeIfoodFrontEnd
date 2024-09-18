// Função para exibir alerta ao clicar no botão
document.getElementById('alert-btn').addEventListener('click', function () {
    alert('Funcionalidade em contrução!');
});

// Função para alterar a cor dos ícones quando o mouse passa sobre eles
const menuIcons = document.querySelectorAll('.menu-icons .icon');

menuIcons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        this.style.color = '#DD9D1E';  // Altera a cor para amarela
    });
    icon.addEventListener('mouseout', function () {
        this.style.color = '#ffffff';  // Volta a cor original (branco)
    });
});

// Função para exibir uma mensagem ao clicar em cada ícone
document.getElementById('home-icon').addEventListener('click', function () {
    alert('Você clicou no ícone de Home!');
});

document.getElementById('chart-icon').addEventListener('click', function () {
    alert('Você clicou no ícone de Gráficos!');
});

document.getElementById('signal-icon').addEventListener('click', function () {
    alert('Você clicou no ícone de Sinal!');
});
