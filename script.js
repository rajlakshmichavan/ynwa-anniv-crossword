const crossword = document.getElementById("crossword");
const checkButton = document.getElementById("check");

// Small test grid (5x5)
const gridData = [
  ["", "", "#", "", ""],
  ["", "#", "", "#", ""],
  ["", "", "", "", ""],
  ["", "#", "", "#", ""],
  ["", "", "#", "", ""],
];

// Correct answers (5x5, same size as gridData)
const solutionGrid = [
  ["C", "A", "#", "T", "S"],
  ["U", "#", "P", "#", "E"],
  ["P", "O", "O", "L", "S"],
  ["S", "#", "E", "#", "R"],
  ["E", "D", "#", "S", "X"],
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
