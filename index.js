let cardCVC = document.querySelector('#header_card_back_cvc')
let numA = document.querySelector("#numA")
let numB = document.querySelector("#numB")
let numC = document.querySelector("#numC")
let numD = document.querySelector("#numD")
let cardName = document.querySelector('#header_card_front_name')
let expDateMonth = document.querySelector('#header_card_front_date_MM')
let expDateYear = document.querySelector('#header_card_front_date_YY')

let arr = []

let defaultName = 'Name Surename'
let defaultNumber = ['0000000000000000']
let defaultMonth = '00'
let defaultYear = '00'
let defaultCVC = '000'

const inputName = document.querySelector('#full_name')
const inputExpDateMonth = document.querySelector('#exp_date_MM')
const inputExpDateYear = document.querySelector('#exp_date_YY')
const inputCVC = document.querySelector('#cvc')
const inputNumber = document.querySelector('#card_number')
const submit =  document.querySelector('.input_submit')
const continueButton = document.querySelector('#continue_button')

const formDisplay = document.querySelector('#form')
const thankyouDisplay = document.querySelector('#thanks_panel')
const headerDisplay = document.querySelector('#header')
const asideDisplay = document.querySelector('#aside')

window.addEventListener('load', () => {
    thankyouDisplay.style.display = 'none';
    asideDisplay.style.display = 'none';
}) 

form.addEventListener('submit', (e) => {
    e.preventDefault()
    formDisplay.hidden = true;
    thankyouDisplay.style.display = 'flex';
})

inputName.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputName), cardName, inputName)

    checkIfBlank(inputName, cardName, defaultName)
})

inputNumber.addEventListener('keyup',()=>{
    if (validityChecker(inputNumber)){
        arr = [inputNumber.value]
    } validityChecker(inputNumber)

    if (validityChecker(inputNumber)){
        cardNumberSeparator()
    }

    if (inputNumber.value === ""){
        inputNumber.parentElement.classList.add('blank')
        numA.innerHTML = defaultNumber[0].slice(0, 4)
        numB.innerHTML = defaultNumber[0].slice(4, 8)
        numC.innerHTML = defaultNumber[0].slice(8, 12)
        numD.innerHTML = defaultNumber[0].slice(12, 16)
    } else {
        inputNumber.parentElement.classList.remove('blank')
    }
})

inputExpDateMonth.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputExpDateMonth), expDateMonth, inputExpDateMonth)

    checkIfBlank(inputExpDateMonth, expDateMonth, defaultMonth)
})

inputExpDateYear.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputExpDateYear), expDateYear, inputExpDateYear)

    checkIfBlank(inputExpDateYear, expDateYear, defaultYear)
})

inputCVC.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputCVC), cardCVC, inputCVC)

    checkIfBlank(inputCVC, cardCVC, defaultCVC)
})

continueButton.addEventListener('click', () => {
    thankyouDisplay.style.display = 'none';
    headerDisplay.style.display = 'none';
    asideDisplay.style.display = 'flex';
})

function checkIfBlank(inp, field, defaultField){
    if (inp.value === ""){
        inp.parentElement.classList.add('blank')
        field.innerHTML = defaultField
    } else {
        inp.parentElement.classList.remove('blank')
    }
}

function validityChecker(inp) {
    if (inp.validity.patternMismatch){
        inp.parentElement.classList.add('error')
        inp.setCustomValidity(' ')
        return false
    } else {
        inp.parentElement.classList.remove('error')
        inp.setCustomValidity('')
        return true
    }
}

function mirrorIfValid(func, cardField, inputField){
    if (func === true){
        cardField.innerHTML = inputField.value;
    } else {
        func
    }
}

function inputToCard() {
    cardCVC.innerHTML = inputCVC.value;
    cardName.innerHTML = inputName.value;
    expDateMonth.innerHTML = inputExpDateMonth.value;
    expDateYear.innerHTML = inputExpDateYear.value;
}

function cardNumberSeparator() {
    numA.innerHTML = arr[0].slice(0, 4)
    numB.innerHTML = arr[0].slice(4, 8)
    numC.innerHTML = arr[0].slice(8, 12)
    numD.innerHTML = arr[0].slice(12, 16)
}