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

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function clearLast() {
    currentInput = currentInput.slice(0, -1)
    document.getElementById('result').value = currentInput;
}


function changeSign() {
    if (currentInput === '')
        currentInput = "-0"
    else {
        if (currentInput[0] === '-')
            currentInput = currentInput.substring(1)
        else
            currentInput = `-${currentInput}`
    }
    document.getElementById('result').value = currentInput;
}