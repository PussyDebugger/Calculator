let currentInput = '';

function showLine() {
    if (currentInput.length > 15)
        document.getElementById('result').innerHTML = currentInput.slice(currentInput.length-15);
    else
        document.getElementById('result').innerHTML = currentInput;
}

function appendToResult(value) {
    if (['/', '*', '-', '+'].includes(value) && currentInput === '')
        currentInput = 0
    currentInput += value;
    showLine();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        showLine();
    } catch (error) {
        currentInput = ''
        document.getElementById('result').innerHTML = 'Error';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').innerHTML = '0';
}

function clearLast() {
    currentInput = currentInput.slice(0, -1)
    if (currentInput === '')
        document.getElementById('result').innerHTML = '0';
    else
        showLine();
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
        showLine();
    }
}