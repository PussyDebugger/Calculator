let currentInput = '';
const history = document.getElementById('history');

function showLine() {
    if (currentInput.length > 15)
        document.getElementById('result').innerHTML = currentInput.slice(currentInput.length-15);
    else
        document.getElementById('result').innerHTML = currentInput;
}

function appendToResult(value) {
    // если к пустой строке добавить знак, то перед знаком допишется 0
    if (['/', '*', '-', '+'].includes(value) && currentInput === '')
        currentInput = 0
<<<<<<< HEAD

    // если поставить точку к пустой строке или сразу после знака, то перед точкой поставится 0
    if (value === '.' && (currentInput === '' || ['/', '*', '-', '+'].includes(currentInput[currentInput.length - 1])))
        currentInput += '0'

    // если после знака поставить другой знак, то второй заменит предыдущий
    if (['/', '*', '-', '+'].includes(value) && ['/', '*', '-', '+'].includes(currentInput[currentInput.length - 1]))
        currentInput = currentInput.slice(0, -1);

    // запрет поставить знак сразу после точки
    if (['/', '*', '-', '+'].includes(value) && currentInput[currentInput.length - 1] === '.')
        return;

    // запрет поставить две точки в одном числе
    if (value === '.' && currentInput.slice(currentInput.search(/[+\-*/][0-9]+$/) + 1).indexOf('.') !== -1)
        return;

    // запрет началь целое число с нуля
    if (value !== '.' && currentInput.slice(currentInput.search(/[+\-*/][0-9]$/) + 1) === '0')
        currentInput = currentInput.slice(0, -1);

=======
    if (value === '.' && (currentInput === '' || ['/', '*', '-', '+'].includes(currentInput[currentInput.length - 1]))) {
        currentInput += '0'
    }
    if (['/', '*', '-', '+'].includes(value) && ['/', '*', '-', '+'].includes(currentInput[currentInput.length - 1]))
        currentInput = currentInput.slice(0, -1);
    if (['/', '*', '-', '+'].includes(value) && currentInput[currentInput.length - 1] === '.')
        return;
    if (value === '.' && currentInput.indexOf('.') !== -1)
        return;
>>>>>>> main
    currentInput += value;
    showLine();
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
