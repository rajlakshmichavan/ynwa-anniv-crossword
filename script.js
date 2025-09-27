const crossword = document.getElementById("crossword");

// Example 15x15 crossword layout
// Use "" for empty squares, "#" for black cells
const gridData = [
  ["", "", "", "", "#", "", "", "", "", "", "", "", "", "", ""],
  ["", "#", "", "", "", "", "#", "", "", "#", "", "", "", "#", ""],
  ["", "", "", "#", "", "", "", "", "", "", "", "#", "", "", ""],
  ["", "", "", "", "", "#", "", "", "#", "", "", "", "", "", ""],
  ["#", "", "", "", "", "", "", "#", "", "", "", "", "", "", "#"],
  // ... add more rows up to 15 total
];

const rows = gridData.length;
const cols = gridData[0].length;

// set CSS grid dynamically
crossword.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

// build cells
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    if (gridData[r][c] === "#" || gridData[r][c] === null) {
      cell.classList.add("black");
    } else {
      const input = document.createElement("input");
      input.maxLength = 1;
      cell.appendChild(input);
    }

    crossword.appendChild(cell);
  }
}
