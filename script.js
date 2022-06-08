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
    if(operate == '+'){
        add(a, b);
    }
    else if(operate == '-'){
        subtract(a, b);
    }
    else if(operate == '*'){
        multiply(a, b);
    }
    else if(operate == '/'){
        divide(a, b);
    }
}

document.addEventListener('keypress', (event) => {
    let pressedKey = event.key;
    console.log(`${pressedKey}`);
  }, false);

let temp = 0;

function operations(element) {
    if (element.id == 'clear') {
        number.innerText = '0';
    }

    else if (number.innerText == 0) {
        number.innerText = element.innerText;
    }

    else {
        number.innerText += element.innerText;
    }

}