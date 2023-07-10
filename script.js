
// Variables for text replacement
let cardName = document.getElementById('card-name')
let cardNumber = document.getElementById('card-number')
let cardDate = document.getElementById('card-date')
let cardBack = document.getElementById('card-back')

//Input variables
let inputName = document.getElementById('cardholder')
let inputNumber = document.getElementById('cardnumber')
let inputMonth = document.getElementById('expiredateM')
let inputYear = document.getElementById('expiredateY')
let inputCode = document.getElementById('cvcnumber')

//verification warnings
const msg = document.getElementById('errorMsg')
const cnum = document.getElementById('card-number-error')
const exError = document.getElementById('expiryError')
const cError = document.getElementById('codeError')

//Buttons
const confirming = document.getElementById('submit')
const cont = document.getElementById('continue')



function nameUpdate() {
    let nameCard = inputName.value
    let nameExp = /^[A-Z a-z]+$/
    if (inputName.value.match(nameExp) && inputName.value.length > 6 && inputName.value.length < 21){
        cardName.innerHTML = `${nameCard}`
        msg.style.display = 'none'
    } else {
        cardName.innerHTML = `Jane Appleseed`
        msg.style.display = 'block'
    }
}

function numberUpdate() {
    let num = inputNumber.value
    if (inputNumber.value.length > 0 && inputNumber.value.length < 16) {
        exError.style.display = 'block'
        cardNumber.innerHTML = `0000 0000 0000 0000`
        cnum.innerHTML = `Wrong Format`
    } else if (cnum.value == '') {
        exError.style.display = 'block'
        cardNumber.innerHTML = `0000 0000 0000 0000`
        cnum.innerHTML = `Can't be blank`
    } else {
        cardNumber.innerHTML = `${num}`
        exError.style.display = 'none'
    }
}


function dateUpdate() {
    let monthExp = /^(0[0-9]|1[1-2]){2}$/
    let yearExp = /^[0-9]{2}$/
    let dMonth = inputMonth.value
    let dYear = inputYear.value
    if (inputMonth.value.match(monthExp)) {
        cardDate.innerHTML = `00/00`
        exError.style.display = 'block'
    } else if (inputMonth.value.match(monthExp) && inputYear.value.match(yearExp)) {
        cardDate.innerHTML = `00/00`
        exError.style.display = 'block'
    } else if (dMonth == ''){
        cardDate.innerHTML = `00/00`
        exError.style.display = 'block'
        exError.innerHTML = "Can't be blank"
    } else if (dYear == '') {
        cardDate.innerHTML = `00/00`
        exError.style.display = 'block'
        exError.innerHTML = "Can't be blank"
    } else{
        exError.style.display = 'none'
        cardDate.innerHTML = `${dMonth}/${dYear}`
    }
}

function codeUpdate() {
    let cod = inputCode.value
    let cvcExp = /^[0-9]{3}$/
    if (cod == '') {
        cardBack.innerHTML = `000`
        cError.style.display = 'block'
        cError.innerHTML = `Can't be blank`
    } else if (inputCode.value.match(cvcExp)) {
        cardBack.innerHTML = `${cod}`
        cError.style.display = 'none'
    } else {
        cardBack.innerHTML = `000`
        cError.style.display = 'block'
        cError.innerHTML = `Wrong Format`
    }
}

function validationAll(){
 if (inputCode.value != '' && inputMonth.value != '' && inputYear.value != '' && inputNumber.value != '' && inputName.value != ''){
    return true
 } else {
    return false
 }
}


function sending(){
    //divs selectors
    const form = document.getElementById('unfilled-form')
    const thx = document.getElementById('filled-form')
    if (validationAll() == true){
        form.style.display = 'none'
        thx.style.display = 'grid'
    } else{
        window.alert('Check all information')
    }

}


