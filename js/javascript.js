const gridContainer = document.getElementById('gridContainer');

for (let i = 0; i < 16; i++) {
    const tempRow = document.createElement('div');
    tempRow.setAttribute(`id`, `row${i}`);
    for (let j = 0; j < 16; j++) {
        const tempGrid = document.createElement('div');
        tempGrid.setAttribute(`id`, `grid${i}${j}`);
        tempGrid.textContent = `${i}${j}`;
        tempRow.appendChild(tempGrid)
    }
    gridContainer.appendChild(tempRow)
}