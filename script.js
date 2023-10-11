let currentInput = '';

function appendToResult(value) {
    if (['/', '*', '-', '+'].includes(value) && currentInput === '')
        currentInput = 0
    currentInput += value;
    document.getElementById('result').innerHTML = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').innerHTML = currentInput;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').innerHTML = '0';
}

function clearLast() {
    currentInput = currentInput.slice(0, -1)
    document.getElementById('result').innerHTML = currentInput;
}


function changeSign() {
    if (currentInput === '') {
        currentInput = "-"
        document.getElementById('result').innerHTML = '-0'
    }
    else {
        if (currentInput[0] === '-')
            currentInput = currentInput.substring(1)
        else
            currentInput = `-${currentInput}`
        document.getElementById('result').innerHTML = currentInput;
    }
}