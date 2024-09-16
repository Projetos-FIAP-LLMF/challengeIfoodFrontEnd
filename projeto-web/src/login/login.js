// Adicione funcionalidades ao formulário de login (exemplo básico)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Login realizado com sucesso!");
    }
});
