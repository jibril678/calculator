// Global Variables
const allButtons = document.querySelectorAll('buttons')
const operandButtons = document.querySelectorAll('.operand')
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const allClearButton = document.querySelector('.all-clear')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')
const displayOutput = document.querySelector('.display')
let operandA = []
let operandB = []
let operator = []
let currentNumber

// Functions 
function clearDisplay () {
    displayOutput.textContent = "0"
    operandA = []
    operandB = []
    operator = []
}

function calculate (numberA, numberB, currentOperator) {
    let result
    numberA = Number(operandA.join(''), 10)
    numberB = Number(operandB.join(''), 10)
    currentOperator = operator.join('')
    console.log(numberA, currentOperator, numberB)
    if (currentOperator == "+") {
        result = numberA + numberB
    } else if (currentOperator == "-") {
        result = numberA - numberB
    } else if (currentOperator == "*") {
        result = numberA * numberB
    } else if (currentOperator == "/") {
        result = numberA / numberB
    }

    return result
}

// Event Listeners
allClearButton.addEventListener('click', () => {
    clearDisplay()
})

clearButton.addEventListener('click', () => {
    if (currentNumber == operandA) {
        operandA.pop()
        displayOutput.textContent = operandA.join('')
        if (operandA.length === 0) {
            clearDisplay()
        }
    } else if (currentNumber == operandB) {
        operandB.pop()
        displayOutput.textContent = operandB.join('')
        if (operandB.length === 0) {
            clearDisplay()
        }
    }
    console.log(operandA)
    console.log(operator)
    console.log(operandB)
})

operandButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (operator.length === 0) {
            currentNumber = operandA
            operandA.push(element.value)
            if (displayOutput.textContent === "0") {
                displayOutput.innerHTML = ''
            }
            displayOutput.textContent = operandA.join('')
        } else if (operator.length > 0) {
            console.log('operator clicked')
            currentNumber = operandB
            operandB.push(element.value)
            if (displayOutput.textContent === "0") {
                displayOutput.innerHTML = ''
            }
            displayOutput.textContent = operandB.join('')
        }
        console.log(operandA)
        console.log(operator)
        console.log(operandB)
    })
});

operatorButtons.forEach(element => {
    element.addEventListener('click', () => {
            if(operator.length > 0) {
                operator[0] = element.value
            } else {
                operator.push(element.value)
            }
            console.log(operandA)
            console.log(operator)
            console.log(operandB)
    })
})

equalsButton.addEventListener('click', () => {
    let result = calculate(operandA, operandB, operator).toFixed(10)
    console.log(result)
    result = parseFloat(result)
    displayOutput.textContent = result
})

// Add NumberA to top of display 
// highlight operator button when selected
// Fix decimal being clicked without a 0 in front
// Add separate functions for Sum, Subtract, Multiply, Divide
// allow multiple calculations 
// See if you can add commas 
// Do final styling


