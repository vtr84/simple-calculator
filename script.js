// let firstValue = parseInt(prompt('💁‍♂️ \nPlease enter the first value:'))
// let operator = prompt('💁‍♂️ \nPlease enter the operation you wish to perfom (+, -, /, *):')
// let secondValue = parseInt(prompt('💁‍♂️\nPlease enter the second value:'))

const firstBox = document.getElementById('firstValue')
const secondBox = document.getElementById('secondValue')
const list = document.getElementById('operator')
const calculateButton = document.getElementById('calculate')
const result = document.getElementById('result')

let firstValue = parseInt(firstBox.value)
let secondValue = parseInt(secondBox.value)
let operatorValue = list.value

// console.log(firstValue + operatorValue + secondValue)

calculateButton.addEventListener('click', function(){
    firstValue = parseInt(firstBox.value)
    secondValue = parseInt(secondBox.value)
    operatorValue = list.value
    if (isNaN(firstValue) || isNaN(secondValue)){
        result.className = 'error'
        result.innerText = '🤖\nCannot compute!\nOnly numbers please!'
    } else {
        calculate(firstValue, secondValue, operatorValue)
    }
})

function calculate (firstValue, secondValue, operatorValue){
switch (operatorValue){
    case '+':
        result.className = 'correct'
        result.innerText = firstValue + secondValue
        break;
    case '-':
        result.className = 'correct'
        result.innerText = firstValue - secondValue
        break;
    case '/':
        if (secondValue!==0){
            result.className = 'correct'
            result.innerText = firstValue / secondValue
        } else {
            result.className = 'error'
            result.innerText = '🤖\nCannot compute!\nThe Universe would collapse!'
        }
        break;
    case '*':
        result.className = 'correct'
        result.innerText = firstValue * secondValue
        break;
    default :
    result.className = 'error'
    result.innerText = 'Invalid Operator'
}
}

// const myButton = document.getElementById('myButton')

// myButton.addEventListener('click', function(){
//     console.log('Click on the button')
// })

// const counter = 

// const random = Math.floor(Math.random() * 10) + 1;

// let name = prompt('Enter your name');

// let num = parseInt(prompt('Enter a number'));

// while(random !== num){

// if(random > num){

// console.log('Try a bigger number')

//  }else {

// console.log('Guess a smaller number')

//  }

// num = parseInt(prompt('Enter a number'));

//  }

// console.log(`${name} wins!!`)