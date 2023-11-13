let convertbtn1 = document.querySelector('#convert')
let convertbtn2 = document.querySelector('#convertF')
let anslabelC = document.querySelector('#ansC')
let anslabelF = document.querySelector('#ansF')

function cToF(d){
    return d * (9/5) + 32 +" °C"
}

function convertC() {
    let degrees =  +document.getElementById('degrees').value
    anslabelC.textContent = cToF(degrees)
}
convertbtn1.addEventListener('click', convertC);

function convertF() {
    let fahrenheit =  +document.getElementById('fahrenheit').value
    anslabelF.textContent = fToC(fahrenheit)
}

function fToC (f){
    return (f - 32) / (9/5) + " F"
}

convertbtn2.addEventListener('click', convertF);

