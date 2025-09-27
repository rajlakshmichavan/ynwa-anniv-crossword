// Define the correct answers (as an example)
const crosswordAnswers = [
    ['C', 'A', 'T', 'S', 'S'],
    ['E', 'E', 'A', 'T', 'S'],
    ['S', 'H', 'A', 'R', 'E'],
    ['S', 'T', 'A', 'R', 'S'],
    ['C', 'A', 'T', 'S', 'S']
];

// Create the crossword grid
function generateCrossword() {
    const table = document.getElementById('crossword');
    for (let row = 0; row < 5; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < 5; col++) {
            let td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.dataset.row = row;
            input.dataset.col = col;
            input.addEventListener('focus', handleFocus);
            td.appendChild(input);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// Handle focus on an input box
let currentInput = null;
function handleFocus(event) {
    currentInput = event.target;
}

// Check the answers when the user clicks the "Check Answers" button
function checkAnswers() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        if (input.value.toUpperCase() === crosswordAnswers[row][col]) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else if (input.value !== '') {
            input.classList.add('incorrect');
            input.classList.remove('correct');
        }
    });
}

// Get a hint for the selected input (show the correct letter)
function getHint() {
    if (currentInput) {
        const row = currentInput.dataset.row;
        const col = currentInput.dataset.col;
        currentInput.value = crosswordAnswers[row][col]; // Show the correct letter
        currentInput.classList.add('correct'); // Optionally mark it as correct immediately
        currentInput.classList.remove('incorrect');
    } else {
        alert('Please select a cell first!');
    }
}

// Clear all the crossword answers
function clearCrossword() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.value = ''; // Clear the value
        input.classList.remove('correct', 'incorrect'); // Reset the styles
    });
}

// Initialize the crossword on page load
window.onload = generateCrossword;
