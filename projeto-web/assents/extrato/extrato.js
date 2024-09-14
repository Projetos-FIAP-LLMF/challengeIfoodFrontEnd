document.querySelectorAll('.transaction-row').forEach(row => {
    row.addEventListener('click', () => {
        const nextElement = row.nextElementSibling;
        if (nextElement && nextElement.classList.contains('transaction-details')) {
            nextElement.style.display = nextElement.style.display === 'table-row' ? 'none' : 'table-row';
            row.querySelector('.dropdown-arrow').textContent = nextElement.style.display === 'table-row' ? '▲' : '▼';
        }
    });
});
