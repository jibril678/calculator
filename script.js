// Global Variables
let operandA = []
let operandB = []
let operator = []
let previousNumber = ''
let currentNumber = ''
let displayResult = 0
let currentOperand = operandA
let equalsClicked = false
const allButtons = document.querySelectorAll('buttons')
const operandButtons = document.querySelectorAll('.operand')
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const allClearButton = document.querySelector('.all-clear')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')
const percentageButton = document.querySelector('.percentage')
const previousOutput = document.querySelector('.previous-number')
const currentOutput = document.querySelector('.current-number')

// On Page Load
currentOutput.textContent = displayResult
previousOutput.textContent = previousNumber


// Functions 
const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

function calculate (a, b, currentOperator) {
    let result
    a = Number(operandA.join(''))
    b = Number(operandB.join(''))
    currentOperator = operator.join('')
        if (currentOperator == "+") {
            result = sum(a, b)
        } else if (currentOperator == "-") {
            result = subtract(a, b)
        } else if (currentOperator == "x") {
            result = multiply(a, b)
        } else if (currentOperator == "÷") {
            result = divide(a, b)
        }
    return result
}

function clearDisplay () {
    currentOutput.textContent = 0
    previousOutput.textContent = ''
    previousNumber = Number(operandA.join(''))
    currentNumber = Number(operandB.join(''))
    operandA = []
    operandB = []
    operator = [operator]
    currentOperand = operandA
}

function equalsOperation () {
    displayResult = Number(calculate(operandA, operandB, operator).toFixed(3))
    clearDisplay()
    currentOutput.textContent = displayResult
    operandA = displayResult.toString().split('')
    currentOperand = operandA
    previousOutput.textContent = `${previousNumber} ${operator} ${currentNumber} =`
}

// Event Listeners
allClearButton.addEventListener('click', () => {
    clearDisplay()
})

percentageButton.addEventListener('click', () => {
if (currentOperand !== 0) {
    let percentageNumber = Number(currentOperand.join(''))
        percentageNumber = Number(divide(percentageNumber, 100).toFixed(3))
        if (currentOperand == operandA) {
            operandA = []
            operandA.push(percentageNumber)
            currentOutput.textContent = operandA.join('')
            currentOperand = operandA
        } 
        else if (currentOperand == operandB) { 
            operandB = []
            operandB.push(percentageNumber)
            currentOutput.textContent = operandB.join('')
            currentOperand = operandB
        }
}})

clearButton.addEventListener('click', () => {
    if (currentOperand == operandA) {
        operandA.pop()
        currentOutput.textContent = operandA.join('')
        if (operandA.length === 0 || currentOutput.textContent == displayResult) {
            displayResult = 0
            currentOutput.textContent = displayResult
        }
    } else if (currentOperand == operandB) {
        operandB.pop()
        currentOutput.textContent = operandB.join('')
        if (operandB.length === 0 || currentOutput.textContent == displayResult) {
            displayResult = 0
            currentOutput.textContent = displayResult      
        }
    }
})

operandButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (equalsClicked) {
            clearDisplay()
            equalsClicked = false
        }
        if (currentOperand === operandA) {
            operandA.push(element.value)
            currentOutput.textContent = operandA.join('')
            previousNumber = Number(operandA.join(''))
        } else if (currentOperand === operandB) {
            operandB.push(element.value)
            currentOutput.textContent = operandB.join('')
            previousOutput.textContent = `${operandA.join('')} ${operator}`

        }
    })
});

operatorButtons.forEach(element => {
    element.addEventListener('click', () => {
        equalsClicked = false
        if (operandA.length > 0 && operandB.length > 0 || operandA.length < 1 && operandB.length > 0) {
            equalsOperation() 
        }
        currentOperand = operandB
        if(operator.length > 0) {
            operator[0] = element.value
            previousOutput.textContent = `${operandA.join('')} ${operator}`

        } 
        else {
            operator.push(element.value)}
            previousOutput.textContent = `${operandA.join('')} ${operator}`

    })
})

equalsButton.addEventListener('click', () => {
    equalsOperation()
    equalsClicked = true
})

decimalButton.addEventListener('click', () => {
    if (equalsClicked) {
        clearDisplay()
        equalsClicked = false
    }    if(currentOperand === operandA) {
        if (!operandA.includes('.')) {
            if (operandA.length < 1) {
            operandA.push('0', '.')
            currentOutput.textContent = operandA.join('')
            } else {
                operandA.push('.')
                currentOutput.textContent = operandA.join('')
                }
            }
        }
        else if(currentOperand === operandB) {
            if (!operandB.includes('.')) {
                if (operandB.length < 1) {
                operandB.push('0', '.')
                currentOutput.textContent = operandB.join('')
                } else {
                    operandB.push('.')
                    currentOutput.textContent = operandB.join('')
                    }  
                }
            }
    }      
)