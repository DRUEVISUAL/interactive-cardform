let cardCVC = document.querySelector('#header_card_back_cvc')
let numA = document.querySelector("#numA")
let numB = document.querySelector("#numB")
let numC = document.querySelector("#numC")
let numD = document.querySelector("#numD")
let cardName = document.querySelector('#header_card_front_name')
let expDateMonth = document.querySelector('#header_card_front_date_MM')
let expDateYear = document.querySelector('#header_card_front_date_YY')

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

let arr = document.getElementsByTagName("input");
let newArr = []

window.addEventListener('load', () => {
    thankyouDisplay.style.display = 'none';
    asideDisplay.style.display = 'none';
}) 

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputToCard()
    cardNumberSeparator()
    formDisplay.hidden = true;
    thankyouDisplay.style.display = 'flex';
})

inputName.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputName), cardName, inputName)
})

inputExpDateMonth.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputExpDateMonth), expDateMonth, inputExpDateMonth)
})

inputExpDateYear.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputExpDateYear), expDateYear, inputExpDateYear)
})

inputCVC.addEventListener('keyup',()=>{
    mirrorIfValid(validityChecker(inputCVC), cardCVC, inputCVC)
})

continueButton.addEventListener('click', () => {
    thankyouDisplay.style.display = 'none';
    headerDisplay.style.display = 'none';
    asideDisplay.style.display = 'flex';
})

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
    newArr = [arr[1].value]
    
    numA.innerHTML = newArr[0].slice(0, 4)
    numB.innerHTML = newArr[0].slice(4, 8)
    numC.innerHTML = newArr[0].slice(8, 12)
    numD.innerHTML = newArr[0].slice(12, 16)
}