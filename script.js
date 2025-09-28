const crossword = document.getElementById("crossword");
const checkButton = document.getElementById("check");

// 25x25 crossword layout
// "" = white cell, "#" = black cell
const gridData = [
  ["#","#","#","#","#","#","#","#","#","#","#","#","","#","#","#","#","#","#","#","#","#","#","#"],
  ["#", "", "", "", "", "#", "", "#","#","#","#","", "", "", "", "", "", "","#","#","#","#","#","#","#"],
  ["#","#","#","#","","#", "", "#","#","#","#","#","", "#","#","#","", "#", "#","#","#","#","#","#","#"],
  ["#","#","#","#","", "#", "", "#","#","#","#","#","", "#","#","#","", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#","", "#", "", "#","", "#", "#", "#", "", "#","#","#", "", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#", "", "#","", "#", "", "#","#", "","#","#","#","#","","#","#","#","#","#","#","#","#"],
  ["#", "#","#","#", "", "", "", "", "", "", "#", "", "#","#","#","#","", "#","#","#","#","#","#","#", "#"],
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
  ["#","#","#","#","#","#","#","", "#","#","#","", "", "", "", "", "#","#","#","#","#","#","#","#","#"]
  ];

// Correct solution grid
// Must match gridData dimensions
const solutionGrid = [
  ["#","#","#","#","#","#","#","#","#","#","#","#","V","#","#","#","#","#","#","#","#","#","#","#", "#"],
  ["#", "A", "W", "R", "A", "#", "A", "#","#","#","#","L", "E", "T", "T", "E", "R", "S","#","#","#","#","#","#","#"],
  ["#","#","#","#","M","#", "G", "#","#","#","#","#","E", "#","#","#","O", "#", "#","#","#","#","#","#","#"],
  ["#","#","#","#","R", "#", "A", "#","#","#","#","#","R", "#","#","#","U", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#","I", "#", "A", "#","A", "#", "#", "#", "A", "#","#","#", "T", "#","#","#","#","#","#","#","#"],
  ["#","#","#","#", "T", "#","H", "#", "N", "#","#", "B","#","#","#","#","I","#","#","#","#","#","#","#","#"],
  ["#", "#","#","#", "S", "H", "A", "R", "A", "D", "#", "R", "#","#","#","#","N", "#","#","#","#","#","#","#", "#"],
  ["#","#","#","#","A", "#", "C", "#", "G", "#", "#", "O", "N", "L", "I", "N", "E", "G", "A", "M", "E", "S", "#","#","#"],
  ["#","C", "#", "#", "R", "#", "H","#", "H", "#", "#", "M", "#","#","#","#","#", "I", "#", "#","#", "#", "#", "#","#"],
  ["#","H", "#","#","#","#", "R","#", "A", "#","#", "A", "#","#","#","#","#", "W","#","#","#","#","#","#","#"],
  ["#","I", "#","#","#","#", "I", "#","#","#","#", "N", "#","#", "#", "#", "#", "K",  "#", "#", "#", "#", "#", "#", "#"],
  ["#", "C", "#", "#", "#", "#", "S",  "#", "#", "#", "#", "C",  "#", "#", "#", "#", "#", "G",  "#", "#", "#", "#", "#", "#", "#"],
  ["#","K", "#", "#", "#", "#", "T",  "#", "#", "#", "#", "E",  "#", "#", "G",  "#", "#", "O", "V", "E", "E",  "#", "#", "#", "#"],
  ["#","E", "#", "#", "T",  "#","I", "#", "#", "#", "#", "#", "#", "#", "O", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ["#","N", "#", "#", "E", "#", "E", "#", "#", "#", "#", "#", "#", "C", "O", "O", "P", "#", "#", "#", "#", "#", "#", "#", "#"],
  ["#","N",  "#", "#","R",  "#", "#","R", "#", "#", "#", "S",  "#", "#","D", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ["#","U",  "#", "#","E", "X", "P", "E", "C", "T", "A", "T", "I", "O", "N", "S", "#", "#", "#", "#", "#","N" "#", "#", "#"],
  ["#","G", "#", "#", "N",  "#", "#","D", "#", "#", "#", "A",  "#", "#","I", "#",  "#", "#", "#", "#", "#","E",  "#", "#", "#"],
  ["#","G",  "#", "#","A", "#", "#", "J", "#", "#", "#", "T", "#", "#", "G",  "#", "#", "#", "#", "#", "#","W",  "#", "#", "#"],
  ["#","E", "#", "#", "I", "#", "#", "O", "#", "#", "#", "Y",  "#", "#","H",  "#", "#", "#", "Y",  "#", "#","Y", "#", "#", "#"],
  ["#","T", "#", "#", "N", "#", "#", "U",  "#", "#", "#","S", "#", "#", "T",  "#","K", "I", "N", "D", "L", "E",  "#", "#", "#"],
  ["#","S","#","#", "A", "#","#","R", "#","#","#","T", "#","#","#","#","#","#","W", "#","#","A", "#","#","#"],
  ["#","#","#","#","#","#","#","N", "#","#","#","I", "#","#","#","#","#","#","A", "#","#","R", "#","#","#"],
  ["#","#","#","#","#","#","#","A", "#","#","#","C", "#","#","#","#","#","#","#","#","#","#","#","#","#"],
  ["#","#","#","#","#","#","#","L", "#","#","#","S", "I", "M", "B", "A", "#","#","#","#","#","#","#","#","#"]
];

// Clue numbers grid (null where no clue starts, number where one does)
const clueNumbers = [
  [null, null, null, null, null, null, null, null, null, null, null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null,],
  [ null,2, null, null,3, null,4, null, null, null, null,5, null, null, null, null,6, null, null, null, null, null, null, null, null],
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,10,null,null,null,null,null,11,null,null,null,null,null,null,null],
   [null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,14,null,null,null,null,null,null,null],
   [null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,16,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,17,null,null,null,18,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,22,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,20,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,21,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
   [null,null,null,null,null,null,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,null,null,null],
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
