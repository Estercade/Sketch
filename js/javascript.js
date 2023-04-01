const gridContainer = document.getElementById('gridContainer');

let width = 16;
let height = 16;

function generateGrid () {
    for (let i = 0; i < height; i++) {
        const tempRow = document.createElement('div');
        tempRow.setAttribute('id', `row${i}`);
        for (let j = 0; j < width; j++) {
            const tempGrid = document.createElement('div');
            tempGrid.setAttribute('id', `gridBox${i}${j}`);
            tempGrid.setAttribute('class', 'gridBox');
            tempGrid.textContent = `${i}${j}`;
            tempRow.appendChild(tempGrid)
        }
        gridContainer.appendChild(tempRow)
    }
}

// Add event listeners to gridBoxes for hover function
const gridBoxes = document.querySelectorAll('.gridBox');
gridBoxes.forEach(gridBox => 
    gridBox.addEventListener('mouseover', colorChange));

function colorChange(e) {
    e.target.setAttribute('style', 'background-color:black');
}

const sizeBtn = document.getElementById('sizeBtn');
sizeBtn.addEventListener('click', resize);

function resize () {
    height = prompt("How tall would you like the sketchpad to be?");
    width = prompt("How wide would you like the sketchpad to be?");
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
    generateGrid();
}

document.onload = generateGrid();