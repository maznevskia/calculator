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

//Keyboard Integration
document.addEventListener('keyup', (event) => {
    let pressedKey = event.key;
    console.log(`${pressedKey}`);
    if (pressedKey == 1)
        document.getElementById("one").click();
    if (pressedKey == 2)
        document.getElementById("two").click();
    if (pressedKey == 3)
        document.getElementById("three").click();
    if (pressedKey == 4)
        document.getElementById("four").click();
    if (pressedKey == 5)
        document.getElementById("five").click();
    if (pressedKey == 6)
        document.getElementById("six").click();
    if (pressedKey == 7)
        document.getElementById("seven").click();
    if (pressedKey == 8)
        document.getElementById("eight").click();
    if (pressedKey == 9)
        document.getElementById("nine").click();
    if (pressedKey == 0)
        document.getElementById("zero").click();
    if (pressedKey == '+')
        document.getElementById("plus").click();
    if (pressedKey == '-')
        document.getElementById("minus").click();
    if (pressedKey == '*')
        document.getElementById("times").click();
    if (pressedKey == '/')
        document.getElementById("divide").click();
    if (pressedKey == '=' || pressedKey == 'Enter')
        document.getElementById("equal").click();
    if (pressedKey == 'c')
        document.getElementById("clear").click();
    if (pressedKey == 'Backspace')
        document.getElementById("delete").click();
    if (pressedKey == '.')
        document.getElementById("point").click();
  }, false);

let tempNumber = 0;
let tempOperator = '';

function operations(element) {
    //AC
    if (element.id == 'clear') {
        number.innerText = '0';
        tempNumber = 0;
        tempOperator = '';
    }

    //+/-
    else if(element.id == 'convert') {
        number.innerText = +number.innerText * -1;
    }


    else if (element.className == 'operators' || element.id == 'delete') {

        //Delete Last Number
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