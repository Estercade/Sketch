const gridContainer = document.getElementById('gridContainer');

let width = 16;
let height = 16;

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

// Add event listeners to gridBoxes for hover function
const gridBoxes = document.querySelectorAll('.gridBox');
gridBoxes.forEach(gridBox => 
    gridBox.addEventListener('mouseover', colorChange));

function colorChange(e) {
    e.target.setAttribute('style', 'background-color:black');
}