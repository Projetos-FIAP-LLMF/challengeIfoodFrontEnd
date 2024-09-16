// Script básico para interação dos botões
document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Plano selecionado!');
    });
});

document.querySelector('a').addEventListener('btn btn-light', function(event) {
    event.preventDefault();
        alert("Funcionalidade em construção");
});