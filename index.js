let cardCVC = document.querySelector('#header_card_back_cvc')
let numA = document.querySelector("#numA")
let numB = document.querySelector("#numB")
let numC = document.querySelector("#numC")
let numD = document.querySelector("#numD")
let cardName = document.querySelector('#header_card_front_name')
let expDateMonth = document.querySelector('#header_card_front_date_MM')
let expDateYear = document.querySelector('#header_card_front_date_YY')
let headerDisplay = document.querySelector('#header')
let asideDisplay = document.querySelector('#aside')

const inputName = document.querySelector('#full_name')
const inputExpDateMonth = document.querySelector('#exp_date_MM')
const inputExpDateYear = document.querySelector('#exp_date_YY')
const inputCVC = document.querySelector('#cvc')

const submit =  document.querySelector('.input_submit')
const continueButton = document.querySelector('#continue_button')
const formDisplay = document.querySelector('#form')
const thankyouDisplay = document.querySelector('#thanks_panel')

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

