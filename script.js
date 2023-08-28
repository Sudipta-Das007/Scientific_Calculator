let currentInput = "";  // To store the current input
let operator = "";      // To store the current operator
let prevInput = "";     // To store the previous input (for calculations)

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput !== "") {
        if (prevInput !== "") {
            calculate(); // Calculate if there's a previous input
        }
        operator = op;
        prevInput = currentInput;
        currentInput = "";
        updateDisplay();
    }
}

function appendFunction(func) {
    if (currentInput !== "") {
        operator = func;
        calculateFunction();
    }
}

function calculate() {
    if (currentInput !== "" && prevInput !== "") {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "^":
                result = Math.pow(num1, num2);
                break;
        }

        currentInput = result.toString();
        operator = "";
        prevInput = "";
        updateDisplay();
    }
}


function calculateFunction() {
    const num = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case 'sqrt':
            result = Math.sqrt(num);
            break;
        case 'exp':
            result = Math.exp(num);
            break;
        case 'sin':
            result = Math.sin(num * (Math.PI / 180)); // Convert degrees to radians
            break;
        case 'cos':
            result = Math.cos(num * (Math.PI / 180));
            break;
        case 'tan':
            result = Math.tan(num * (Math.PI / 180));
            break;
        case 'log':
            result = Math.log10(num);
            break;
        case 'asin':
            result = Math.asin(num) * (180 / Math.PI); // Convert radians to degrees
            break;
        case 'acos':
            result = Math.acos(num) * (180 / Math.PI);
            break;
        case 'atan':
            result = Math.atan(num) * (180 / Math.PI);
            break;
        case 'pow':
            result = Math.pow(num, 2); // x squared
            break;
        case 'power':
            result = Math.pow(num, 3); // x squared
            break;
    }

    currentInput = result.toString();
    operator = "";
    updateDisplay();
}


function calculateResult() {
    if (currentInput !== "" && prevInput !== "") {
        const num1 = parseFloat(prevInput);
        const num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            // Add more cases for other operators
        }

        return result;
    }
    return "";
}



function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) {
        return; // Prevent multiple decimal points
    }
    currentInput += number;
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    updateDisplay();
}


function clearDisplay() {
    currentInput = "";
    operator = "";
    prevInput = "";
    updateDisplay();
}


function updateDisplay() {
    document.getElementById("expression").value = prevInput + operator + currentInput;
    document.getElementById("result").value = calculateResult();
}
