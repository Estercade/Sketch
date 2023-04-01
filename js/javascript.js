const gridContainer = document.getElementById('gridContainer');

for (let i = 0; i < 16; i++) {
    const tempRow = document.createElement('div');
    tempRow.setAttribute(`id`, `row${i}`);
    for (let j = 0; j < 16; j++) {
        const tempGrid = document.createElement('div');
        tempGrid.setAttribute(`id`, `gridBox${i}${j}`);
        tempGrid.setAttribute(`class`, `gridBox`);
        tempGrid.textContent = `${i}${j}`;
        tempRow.appendChild(tempGrid)
    }
    gridContainer.appendChild(tempRow)
}

// Add event listeners to gridBoxes for hover function
const gridBoxes = document.querySelectorAll(`.gridBox`);
gridBoxes.forEach(gridBox => 
    gridBox.addEventListener('mouseover', () => 
    console.log(`1`)));
