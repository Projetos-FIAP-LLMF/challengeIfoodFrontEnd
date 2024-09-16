const debitos = [
    { produto: 'Caixas de Pães', valor: -500 },
    { produto: 'Sacos de Batatas', valor: -300 },
    { produto: 'Caixas de Embalagens', valor: -150 }
];

function atualizarDebitos() {
    const lista = document.querySelector('.list-group');
    lista.innerHTML = '';
    debitos.forEach(debito => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.innerHTML = `${debito.produto} <span class="text-danger">R$ ${debito.valor}</span>`;
        lista.appendChild(item);
    });
}

function adicionarDebito() {
    const nomeProduto = document.getElementById('novoProdutoNome').value;
    const valorProduto = document.getElementById('novoProdutoValor').value;

    // Verificar se os campos estão preenchidos
    if (nomeProduto === '' || valorProduto === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    // Adicionar o novo débito à lista de débitos
    const novoDebito = { produto: nomeProduto, valor: parseFloat(valorProduto) };
    debitos.push(novoDebito);

    // Atualizar a lista de débitos
    atualizarDebitos();

    // Limpar os campos após adicionar
    document.getElementById('novoProdutoNome').value = '';
    document.getElementById('novoProdutoValor').value = '';

    // Fechar o modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('adicionarDebitoModal'));
    modal.hide();
}

function filtrarProdutos(query) {
    const produtos = document.querySelectorAll('.product-item');
    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('p').textContent.toLowerCase();
        if (nomeProduto.includes(query.toLowerCase())) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

document.getElementById('produtoBusca').addEventListener('input', (e) => {
    filtrarProdutos(e.target.value);
});

function verificarEstoqueBaixo() {
    const estoqueItens = document.querySelectorAll('.stock-item');
    estoqueItens.forEach(item => {
        const quantidade = parseInt(item.querySelector('p:nth-child(2)').textContent);
        if (quantidade <= 3) {
            item.classList.add('alert', 'alert-danger');
            item.querySelector('p:nth-child(1)').textContent += ' - Estoque Baixo!';
        }
    });
}

verificarEstoqueBaixo();

const produtosMaisVendidos = document.querySelectorAll('.seller-item');
produtosMaisVendidos.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Detalhes do produto: ${item.querySelector('p').textContent}`);
    });
});


