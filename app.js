const generateBtn = document.getElementById('generate');
const invertBtn = document.getElementById('generate-inverted');
const characterTextBox = document.getElementById('pyramid-character');
const rowsNumberBox = document.getElementById('pyramid-rows');

const pyramidDisplay = document.getElementById('pyramid-display');

let invert = false;

function padRow(rowNumber, rowCount, character) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

function buildPyramid(rows, count, character) {
    for (let i = 1; i <= count; i++) {
        if (invert) {
            rows.unshift(padRow(i, count, character));
        } else {
            rows.push(padRow(i, count, character));
        };
    }
}

function displayPyramid() {
    let rows = [];
    let char = characterTextBox.value;
    let num = rowsNumberBox.value;

    let pyramid = buildPyramid(rows, num, char);

    pyramidDisplay.innerText = '';

    for (const row of rows) {
        pyramidDisplay.innerText += `${row}\n`;
    }
}

function invertPyramid() {
    invert ? invert = false : invert = true;
    invertBtn.classList.toggle('inverted-active')
}

function loadEventHandlers() {
    generateBtn.addEventListener('click', displayPyramid);
    invertBtn.addEventListener('click', invertPyramid);
}

loadEventHandlers();