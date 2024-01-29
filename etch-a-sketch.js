function generateGrid(numPerSide) {
    for (let i = 0; i < numPerSide; i++) {
        const row_div = document.createElement('div');
        row_div.setAttribute('id', 'row' + i); 
        row_div.classList.add('grid-row');
        for (let j = 0; j < numPerSide; j++) {
            const col_div = document.createElement('div');
            col_div.setAttribute('id', 'row' + i + 'col' + j); 
            col_div.classList.add('grid-item');
            col_div.addEventListener("mouseover", () => {
                col_div.classList.add('grid-item-hover');
            });
            row_div.appendChild(col_div);
        }
        container.appendChild(row_div);
    };
};

function resetGrid() {
    const gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach((row) => {
        container.removeChild(row);
    });
};

const container = document.querySelector('.container');
const gridResetButton = document.querySelector('.grid-reset-btn');

gridResetButton.addEventListener('click', () => {
    let numPerSide = prompt("Enter number of squares per side:")
    resetGrid();
    generateGrid(numPerSide);
});

generateGrid(4);