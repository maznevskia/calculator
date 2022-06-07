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

function operations(element) {
    console.log(element.id);
}