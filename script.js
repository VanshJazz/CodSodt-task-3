// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the clicked button value to the display
    adjustFontSize(display); // Adjust font size after appending
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
    adjustFontSize(display); // Reset font size
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
        adjustFontSize(display); // Adjust font size after calculation
    } catch (error) {
        display.value = 'Error'; // Handle any errors
        adjustFontSize(display); // Adjust font size for error message
    }
}

function adjustFontSize(display) {
    const maxLength = 10; // Maximum number of characters before resizing
    const length = display.value.length;

    if (length > maxLength) {
        display.style.fontSize = '1em'; // Reduce font size when length exceeds maxLength
    } else {
        display.style.fontSize = '2em'; // Default font size
    }
}