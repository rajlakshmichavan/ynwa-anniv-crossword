const crossword = document.getElementById("crossword");
const checkButton = document.getElementById("check");

// 25x25 crossword layout
// "" = white cell, "#" = black cell
const gridData = [
  ["#","#","#","#","#","#","#","#","#","#","#","#",,"","#","#","#","#","#","#","#","#","#","#","#", ""],
  ["#", "", "", "", "", "#", "", "#","#","#","#","", "", "", "", "", "", "","#","#","#","#","#","#","#"],
  ["#","#","#","#","","#", "", "#","#","#","#","#","", "#","#","#","", "#", "#","#","#","#","#","#","#"],
  ["#","#","#","#","", "#", "", "#","#","#","#","#","", "#","#","#","", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#","", "#", "", "#","", "#", "#", "#", "", "#","#","#", "", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#", "", "#","", "#", "", "#","#", "","#","#","#","#","","#","#","#","#","#","#","#","#"],
  ["#", "#","#","#", "", "", "", "", "", "", "#", "", "#","#","#","#","", "", "","#","#","#","#","#","#","#"],
  ["#","#","#","#","", "#", "", "#", "", "#", "#", "", "", "", "", "", "", "", "", " ", "", "", "#","#","#"],
  ["#","", "#", "#", "", "#", "","#", "", "#", "#", "", "#","#","#","#","#", "", "#", "#","#", "#", "#", "#","#"],
  ["#","", "#","#","#","#", "","#", "", "#","#", "", "#","#","#","#","#", "","#","#","#","#","#","#","#"],
  ["#","", "#","#","#","#", "", "#","#","#","#", "", "#","#", "#", "#", "#", "",  "#", "#", "#", "#", "#", "#", "#"],
  ["#", "",  "#", "#", "#", "#", "",  "#", "#", "#", "#", "",  "#", "#", "#", "#", "#", "",  "#", "#", "#", "#", "#", "#", "#"],
  ["#","",  "#", "#", "#", "#", "",  "#", "#", "#", "#", "",  "#", "#", "",  "#", "#", "", "", "", "",  "#", "#", "#", "#"],
  [ "#","", "#", "#", "",  "#","", "#", "#", "#", "#", "#", "#", "#", "", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  [ "#","", "#", "#", "", "#", "", "#", "#", "#", "#", "#", "#", "", "", "", "", "#", "#", "#", "#", "#", "#", "#", "#"],
  [ "#","",  "#", "#","",  "#", "#","", "#", "#", "#", "",  "#", "#","", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  [ "#","",  "#", "#","", "", "", "", "", "", "", "", "", "", "", "",  "#", "#", "#", "#", "#","" "#", "#", "#"],
  [ "#","",  "#", "#", "",  "#", "#","", "#", "#", "#", "",  "#", "#","", "#",  "#", "#", "#", "#", "#","",  "#", "#", "#"],
  [ "#","",  "#", "#","", "#", "#", "", "#", "#", "#", "", "#", "#", "",  "#", "#", "#", "#", "#", "#","",  "#", "#", "#"],
  [ "#","", "#", "#", "", "#", "#", "", "#", "#", "#", "",  "#", "#","",  "#", "#", "#", "",  "#", "#","", "#", "#", "#"],
  [ "#","", "#", "#", "", "#", "#", "",  "#", "#", "#","", "#", "#", "",  "#","", "", "", "", "", "",  "#", "#", "#"],
  ["#","","#","#", "", "#","#","", "#","#","#","", "#","#","#","#","#","#","", "#","#","", "#","#","#"],
  ["#","#","#","#","#","#","#","", "#","#","#","", "#","#","#","#","#","#","", "#","#","", "#","#","#"],
  ["#","#","#","#","#","#","#","", "#","#","#","", "#","#","#","#","#","#","#","#","#","#","#","#","#"],
  ["#","#","#","#","#","#","#","", "#","#","#","", "", "", "", "", "#","#","#","#","#","#","#","#","#"];

// Correct solution grid
// Must match gridData dimensions
const solutionGrid = [
  ["Y", "N", "W", "A", "#", "L", "I", "V", "E", "R", "P", "O", "O", "L", ""],
  ["", "#", "N", "E", "V", "E", "#", "W", "A", "#", "L", "K", "", "#", ""],
  ["", "", "A", "#", "L", "O", "N", "E", "", "", "", "#", "", "", ""],
  ["", "", "L", "", "", "#", "Y", "N", "#", "W", "A", "Y", "", "", ""],
  ["#", "K", "O", "P", "", "", "", "#", "R", "E", "D", "S", "", "", "#"],
  ["L", "E", "#", "G", "E", "N", "D", "S", "", "", "N", "O", "#", "1", "9"],
  ["", "#", "R", "#", "I", "S", "#", "C", "L", "#", "U", "#", "B", "#", ""],
  ["T", "H", "E", "B", "E", "S", "T", "", "T", "E", "A", "M", "S", "E", "R"],
  ["", "#", "E", "#", "L", "F", "#", "C", "U", "#", "P", "#", "S", "#", ""],
  ["1", "8", "#", "9", "2", "0", "", "", "C", "U", "P", "S", "#", "L", "F"],
  ["#", "A", "N", "F", "I", "E", "L", "D", "#", "H", "O", "M", "E", "", "#"],
  ["", "", "Y", "N", "W", "A", "#", "S", "O", "#", "N", "G", "", "", ""],
  ["", "", "O", "#", "K", "L", "O", "P", "P", "", "", "#", "T", "I", "T"],
  ["", "#", "P", "A", "I", "S", "L", "E", "Y", "#", "M", "A", "N", "#", ""],
  ["", "", "L", "I", "V", "E", "#", "R", "B", "I", "R", "D", "", "", ""],
];

// Clue numbers grid (null where no clue starts, number where one does)
const clueNumbers = [
  [1, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 2, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, 3, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, 4, null, null, null, null, null, null, 5, null, null, null, null, null, null],
  // ... fill this out with your intended numbering
];

const rows = gridData.length;
const cols = gridData[0].length;

// set CSS grid dynamically
crossword.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

// build crossword cells
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (gridData[r][c] === "#" || gridData[r][c] === null) {
      cell.classList.add("black");
    } else {
      const input = document.createElement("input");
      input.maxLength = 1;
      input.dataset.row = r;
      input.dataset.col = c;

      // If this cell has a clue number, render it
      if (clueNumbers[r] && clueNumbers[r][c] !== null) {
        const numberSpan = document.createElement("span");
        numberSpan.classList.add("clue-number");
        numberSpan.textContent = clueNumbers[r][c];
        cell.appendChild(numberSpan);
      }

      cell.appendChild(input);
    }

    crossword.appendChild(cell);
  }
}

// verification function
checkButton.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".cell input");
  inputs.forEach(input => {
    const r = parseInt(input.dataset.row);
    const c = parseInt(input.dataset.col);
    const userVal = input.value.toUpperCase();
    const correctVal = solutionGrid[r][c];

    if (userVal === "") {
      input.style.backgroundColor = "white"; // not filled yet
    } else if (userVal === correctVal) {
      input.style.backgroundColor = "lightgreen"; // correct
    } else {
      input.style.backgroundColor = "salmon"; // wrong
    }
  });
});
