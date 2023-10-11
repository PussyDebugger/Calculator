let currentInput = '';

function appendToResult(value) {
    if (['/', '*', '-', '+'].includes(value) && currentInput === '')
        currentInput = 0
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
