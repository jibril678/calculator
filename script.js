// Global Variables
let operandA = []
let operandB = []
let operator = []
let displayResult = 0
let currentNumber = operandA
let equalsClicked = false
const allButtons = document.querySelectorAll('buttons')
const operandButtons = document.querySelectorAll('.operand')
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('.decimal')
const allClearButton = document.querySelector('.all-clear')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')
const displayOutput = document.querySelector('.display')

// On Page Load
displayOutput.textContent = displayResult


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
        } else if (currentOperator == "*") {
            result = multiply(a, b)
        } else if (currentOperator == "/") {
            result = divide(a, b)
        }
    return result
}

function clearDisplay () {
    displayOutput.textContent = 0
    operandA = []
    operandB = []
    operator = [operator]
    currentNumber = operandA
}

function equalsOperation () {
    displayResult = Number(calculate(operandA, operandB, operator).toFixed(2))
    clearDisplay()
    displayOutput.textContent = displayResult
    operandA = displayResult.toString().split('')
    currentNumber = operandA
}

// Event Listeners
allClearButton.addEventListener('click', () => {
    clearDisplay()
})

clearButton.addEventListener('click', () => {
    if (currentNumber == operandA) {
        operandA.pop()
        displayOutput.textContent = operandA.join('')
        if (operandA.length === 0 || displayOutput.textContent == displayResult) {
            clearDisplay()
        }
    } else if (currentNumber == operandB) {
        operandB.pop()
        displayOutput.textContent = operandB.join('')
        if (operandB.length === 0 || displayOutput.textContent == displayResult) {
            clearDisplay()
        }
    }
})

operandButtons.forEach(element => {
    element.addEventListener('click', () => {
        if (equalsClicked) {
            clearDisplay()
            equalsClicked = false
        }
        if (currentNumber === operandA) {
            operandA.push(element.value)
            displayOutput.textContent = operandA.join('')
        } else if (currentNumber === operandB) {
            operandB.push(element.value)
            displayOutput.textContent = operandB.join('')
        }
        console.log('END Number A:', operandA)
        console.log('Operator:', operator)
        console.log('END Number B:', operandB)
    })
});

operatorButtons.forEach(element => {
    element.addEventListener('click', () => {
        equalsClicked = false
        if (operandA.length > 0 && operandB.length > 0) {
            equalsOperation() 
        }
        currentNumber = operandB
        if(operator.length > 0) {
            operator[0] = element.value} 
        else {
            operator.push(element.value)}
            console.log('END Operator A:', operandA)
            console.log('Operator:', operator)
            console.log('END Operator B:', operandB)
    })
})

equalsButton.addEventListener('click', () => {
    equalsOperation()
    equalsClicked = true 
    }
)

decimalButton.addEventListener('click', () => {
    if (equalsClicked) {
        clearDisplay()
        equalsClicked = false
    }    if(currentNumber === operandA) {
        if (!operandA.includes('.')) {
            if (operandA.length < 1) {
            operandA.push('0', '.')
            displayOutput.textContent = operandA.join('')
            } else {
                operandA.push('.')
                displayOutput.textContent = operandA.join('')
                }
            }
        }
        else if(currentNumber === operandB) {
            if (!operandB.includes('.')) {
                if (operandB.length < 1) {
                operandB.push('0', '.')
                displayOutput.textContent = operandB.join('')
                } else {
                    operandB.push('.')
                    displayOutput.textContent = operandB.join('')
                    }  
                }
            }
    }      
)


// Add NumberA to top of display 
// Button selection styling
// Do final styling
