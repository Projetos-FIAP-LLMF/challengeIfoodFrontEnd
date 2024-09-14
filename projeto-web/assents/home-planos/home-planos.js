// Script básico para interação dos botões
document.querySelectorAll('.plan button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Plano selecionado!');
    });
});
