const gridContainer = document.getElementById('gridContainer');

// Default grid size of 16 x 16 upon pageload
let size = 16;

function generateGrid () {
    for (let i = 0; i < size; i++) {
        const tempRow = document.createElement('div');
        tempRow.setAttribute('id', `row${i}`);
        for (let j = 0; j < size; j++) {
            const tempGrid = document.createElement('div');
            tempGrid.setAttribute('id', `gridBox${i}${j}`);
            tempGrid.setAttribute('class', 'gridBox');
            tempRow.appendChild(tempGrid);
        }
        gridContainer.appendChild(tempRow);
    }
}

var isClicked = false;

window.addEventListener('mousedown', e => {
    isClicked = true;
    }
);

window.addEventListener('mouseup', e => {
    isClicked = false;
    }
);
  

// Add event listeners to gridBoxes for hover and mouseover
function addEvents() {
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox) => 
        gridBox.addEventListener('mouseover', hoverToggleHandler));
    gridBoxes.forEach((gridBox) =>
        gridBox.addEventListener('mousedown', hoverToggleHandler));
    gridBoxes.forEach((gridBox) =>
        gridBox.addEventListener('mouseenter', hoverToggleHandler));
};

const hoverToggleSwitch = document.getElementById('hoverToggleSwitch')
hoverToggleSwitch.addEventListener('click', hoverToggle);

function hoverToggleHandler(e) {
    if (!activeHoverToggle.includes(e.type)) {
        return;
    } else if (e.type === 'mouseenter' && isClicked === false) {
        return;
    }
    colorChange(e);
}

// Set to hover by default
let activeHoverToggle = 'mouseover'

function hoverToggle(e) {
    if (hoverToggleSwitch.checked === true) {
        activeHoverToggle = 'mousedown, mouseenter';
    } else if (hoverToggleSwitch.checked === false) {
        activeHoverToggle = 'mouseover';
    }
}

function colorChange(e) {
    if (!e.target.style.backgroundColor) {
        randomizeColor(e);
    } else {
        darkenColor(e);
    }
}

function randomizeColor(e) {
    // Obtain random number and multiply by number of hex color values (16777216) then convert to hex
    let randomColor = "#" + (Math.floor(Math.random() * 16777216) + 1).toString(16);
    e.target.setAttribute('style', `background-color:${randomColor}`);
}

// Colors start at brightness 1, repeat hover will 
// decrease brightness by 10% and at brightness 0 
// gridBox will be black
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
    size = prompt("How large would you like the sketchpad to be? (maximum 100)");
    if (size > 100 || size < 1 || size === null) {
        alert("Please enter a valid number.");
        throw new Error("Input is not a valid number.");
    }
    clearGrid();
    generateGrid();
    addEvents();
}

function clearGrid() {
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

const gridLinesToggle = document.getElementById('gridLinesToggle');
gridLinesToggle.addEventListener('click', showGridLines);

function showGridLines() {
    return;
    // const gridBoxes = document.querySelectorAll('.gridBox');
    // gridBoxes.forEach(gridBox =>
    //     gridBox.style.border-style = none);
}

const clearColorsBtn = document.getElementById('clearColorsBtn');
clearColorsBtn.addEventListener('click', clearColors);

function clearColors() {
    const gridBoxes = document.querySelectorAll('.gridBox');
    gridBoxes.forEach((gridBox) => 
    gridBox.removeAttribute('style'))
}

document.onload = generateGrid(), addEvents();