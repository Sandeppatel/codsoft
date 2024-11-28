let display = document.getElementById('display');

// Function to append input to the display
function appendInput(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Function to calculate the result
function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
