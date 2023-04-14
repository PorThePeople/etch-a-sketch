for (i = 1 ; i < 26 ; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (j = 1 ; j < 26 ; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = '25px';
        cell.style.width = '25px';
        row.appendChild(cell);
    }
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {cell.style.backgroundColor = 'red'});
});

const newgrid = document.querySelector('#new');
newgrid.addEventListener('click', () => newGrid());

function newGrid() {
    let newNumber = Number(prompt('Enter here'));
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    let side = 625 / newNumber;
    for (i = 1 ; i < (newNumber + 1) ; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 1 ; j < (newNumber + 1) ; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.height = `${side}px`;
             cell.style.width = `${side}px`;
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {cell.style.backgroundColor = 'red'});
});
    return
};

