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
            // tempGrid.textContent = `${i}${j}`;
            tempRow.appendChild(tempGrid);
        }
        gridContainer.appendChild(tempRow);
    }
}

// Add event listeners to gridBoxes for hover function
function addHover() {
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach(gridBox => 
        gridBox.addEventListener('mouseover', colorChange));
}

function colorChange(e) {
    if (!e.target.style.backgroundColor) {
        randomizeColor(e);
    } else {
        // e.target.style.filter = 'brightness(0.10)';
        darkenColor(e);
    }
}

function randomizeColor(e) {
    // Obtain random number and multiply by number of hex color values (16777216) then convert to hex
    let randomColor = "#" + (Math.floor(Math.random() * 16777216) + 1).toString(16);
    e.target.setAttribute('style', `background-color:${randomColor}`);
}

function darkenColor(e) {
    let brightness = Number(e.target.style.filter.slice(-4, -1));
    if (!e.target.style.filter) {
        e.target.style.filter = 'brightness(0.90)';
    } else if (brightness === 0) {
        return;
    } else {
        let newBrightness = e.target.style.filter.slice(-4, -1) - 0.10;
        e.target.style.filter = `brightness(${newBrightness})`;
    }
}

const sizeBtn = document.getElementById('sizeBtn');
sizeBtn.addEventListener('click', resize);

function resize () {
    height = prompt("How tall would you like the sketchpad to be? (maximum 100)");
    width = prompt("How wide would you like the sketchpad to be? (maximum 100)");
    if (height > 100 || height < 1 || height === null || width > 100 || width < 1 || width === null) {
        alert("Please enter a valid number.");
        throw new Error("Input is not a valid number.");
    }
    clearGrid();
    generateGrid();
    addHover();
}

function clearGrid() {
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

document.onload = generateGrid(), addHover();