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
    func()
    func2()
    formDisplay.hidden = true;
    thankyouDisplay.style.display = 'flex';
})

continueButton.addEventListener('click', () => {
    thankyouDisplay.style.display = 'none';
    headerDisplay.style.display = 'none';
    asideDisplay.style.display = 'flex';
})


inputName.addEventListener('change', () => {
    if (inputName.validity.patternMismatch){
        inputName.parentElement.classList.add('error')
        inputName.setCustomValidity(' ')
    } else {
        inputName.parentElement.classList.remove('error')
        inputName.setCustomValidity('')
    }
})

inputNumber.addEventListener('change', () => {
    if (inputNumber.validity.patternMismatch) {
        inputNumber.parentElement.classList.add('error')
        inputNumber.setCustomValidity(' ')
    } else {
        inputNumber.parentElement.classList.remove('error')
        inputNumber.setCustomValidity('')
    }
})

inputExpDateMonth.addEventListener('input', () => {
    if (inputExpDateMonth.validity.valueMissing) {
       inputExpDateMonth.parentElement.classList.add('error')
       inputExpDateMonth.setCustomValidity(' ')
    } else {
        inputExpDateMonth.parentElement.classList.remove('error')
        inputExpDateMonth.setCustomValidity('')
    }
})

inputExpDateYear.addEventListener('input', () => {
    if (inputExpDateYear.validity.valueMissing) {
        inputExpDateYear.parentElement.classList.add('error')
        document.querySelector('.date_MM').classList.add('error')
       inputExpDateYear.setCustomValidity(' ')
    } else {
        inputExpDateYear.parentElement.classList.remove('error')
        document.querySelector('.date_MM').classList.remove('error')
        inputExpDateYear.setCustomValidity('')
    }
})

inputCVC.addEventListener('input', () => {
    if (inputCVC.validity.valueMissing) {
        inputCVC.parentElement.classList.add('error')
        inputCVC.setCustomValidity(' ')
    } else {
        inputCVC.parentElement.classList.remove('error')
        inputCVC.setCustomValidity('')
    }
})


function func() {
    cardCVC.innerHTML = inputCVC.value;
    cardName.innerHTML = inputName.value;
    expDateMonth.innerHTML = inputExpDateMonth.value;
    expDateYear.innerHTML = inputExpDateYear.value;
}

function func2() {
    newArr = [arr[1].value]
    
    numA.innerHTML = newArr[0].slice(0, 4)
    numB.innerHTML = newArr[0].slice(4, 8)
    numC.innerHTML = newArr[0].slice(8, 12)
    numD.innerHTML = newArr[0].slice(12, 16)
}