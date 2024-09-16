document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        const detailsRow = this.parentNode.nextElementSibling;
        const icon = this.querySelector('i');
        
        // Alterna a exibição dos detalhes
        if (detailsRow.style.display === "none") {
            detailsRow.style.display = "table-row";
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            detailsRow.style.display = "none";
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
    });
});

document.querySelector('.form-control').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('.transaction-row');
    
    rows.forEach(row => {
        const productName = row.children[0].textContent.toLowerCase();
        
        // Verifica se o nome do produto contém o termo de busca
        if (productName.includes(searchTerm)) {
            row.style.display = '';
            row.nextElementSibling.style.display = ''; // Mostra também os detalhes da transação, se oculto
        } else {
            row.style.display = 'none';
            row.nextElementSibling.style.display = 'none';
        }
    });
});

document.querySelectorAll('.transaction-row').forEach(row => {
    const valueText = row.children[3].textContent;
    
    if (valueText.includes('+')) {
        row.querySelector('.dropdown i').classList.add('fa-arrow-up');
    } else if (valueText.includes('-')) {
        row.querySelector('.dropdown i').classList.add('fa-arrow-down');
    }
});

