let currentInput = '';
const history = document.getElementById('history');

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
    console.log(currentInput)
}

function calculateResult() {
    try {
        const listItem = document.createElement("li");
        listItem.textContent = `${currentInput}=${eval(currentInput).toString()}`;
        history.insertBefore(listItem, history.firstChild);
        if (history.children.length > 12)
            history.removeChild(history.lastChild)

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