function add(a, b) {
    return(a + b);
}

function subtract(a, b) {
    return(a - b);
}

function multiply(a, b) {
    return(a * b);
}

function divide(a, b) {
    return(a / b);
}

function operate(operator, a, b) {
    if(operator == '+'){
        return add(a, b);
    }
    else if(operator == '-'){
        return subtract(a, b);
    }
    else if(operator == '*'){
        return multiply(a, b);
    }
    else if(operator == '/'){
        return divide(a, b);
    }
}

document.addEventListener('keypress', (event) => {
    let pressedKey = event.key;
    console.log(`${pressedKey}`);
  }, false);

let tempNumber = 0;
let tempOperator = '';

function operations(element) {
    if (element.id == 'clear') {
        number.innerText = '0';
        tempNumber = 0;
        tempOperator = '';
    }

    else if(element.id == 'convert') {
        number.innerText = +number.innerText * -1;
    }

    else if (element.className == 'operators' || element.id == 'delete') {

        if (element.id == 'delete') {
            if (+number.innerText > 0) {
                number.innerText = number.innerText.slice(0, -1);
                return;
            }
        }

        let operator = element.innerText;

        if (!tempOperator && operator != '=') {
            tempOperator = operator;
        }

        if (operator == '=') {
            if (tempOperator != '') {
                number.innerText = operate(tempOperator, tempNumber, +number.innerText);
            }
        }
        
        else {
            if (tempNumber == 0) {
                tempNumber = +number.innerText;
            }
            else {
                tempNumber = operate(tempOperator, tempNumber, +number.innerText);
            }
            number.innerText = '';

            tempOperator = operator;
        }
    }

    else if (number.innerText == 0) {
        number.innerText = element.innerText;
    }

    else {
        if (number.innerText.includes('.') && element.innerText == '.') return
        else number.innerText += element.innerText;
    }
}