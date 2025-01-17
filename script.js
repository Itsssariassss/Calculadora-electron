const resultInput = document.getElementById('result');

function appendNumber(number) {
    resultInput.value += number;
}

function appendOperator(operator) {
    const lastChar = resultInput.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        resultInput.value = resultInput.value.slice(0, -1) + operator;
    } else {
        resultInput.value += operator;
    }
}

function calculatePercentage() {
    try {
        let currentValue = parseFloat(resultInput.value);
        if (!isNaN(currentValue)) {
            resultInput.value = (currentValue / 100).toString();
        }
    } catch {
        resultInput.value = "Error";
    }
}

function clearResult() {
    resultInput.value = '';
}

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value); 
    } catch {
        resultInput.value = "Error"; 
    }
}
