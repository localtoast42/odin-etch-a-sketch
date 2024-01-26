const container = document.querySelector('.container');

for (let i = 0; i < 4; i++) {
    const row_div = document.createElement('div');
    row_div.setAttribute('id', 'row' + i); 
    for (let j = 0; j < 4; j++) {
        const col_div = document.createElement('div');
        col_div.setAttribute('id', 'row' + i + 'col' + j); 
        row_div.appendChild(col_div);
    }
    container.appendChild(row_div);
};