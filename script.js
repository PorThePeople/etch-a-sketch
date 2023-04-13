for (i = 1 ; i < 17 ; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (j = 1 ; j < 17 ; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {cell.setAttribute('style', 'background: red;')});

});