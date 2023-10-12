const buttons = [
    document.getElementById("buttonOne"),
    document.getElementById("buttonTwo"),
    document.getElementById("buttonThree")
];
const clearButton = document.getElementById("buttonClear")
let correctCombination = [];
let digitValues = [];
const codeDigits = [
    document.getElementById("digitOne"),
    document.getElementById("digitTwo"),
    document.getElementById("digitThree")
];
let turnsLeft = 7;
let digitPlace = 0;
let minutesLeftDisplay = document.getElementById("minutesLeftDisplay")
function clear() {
    digitPlace = 0;
    digitValues = [
        1,
        1,
        1,
    ],
    updateDisplay();
}
function init() {
    turnsLeft = 7;
    clear();
    for(let i = 0; i < buttons.length; i++) {
        console.log(buttons);
        buttons[i].addEventListener("click", function(){setDigit(i + 1)});
    }
    clearButton.addEventListener("click", clear())
    updateDisplay();
}
function updateDisplay() {
    for(let i = 0; i < digitValues.length; i++) {
        codeDigits[i].textContent = digitValues[i];
    }
    minutesLeftDisplay.textContent = turnsLeft;
}
function shiftDigit() {
    if(digitPlace != codeDigits.length - 1) {
        digitPlace += 1;
    } else {
        digitPlace = 0;
        processGuess(digitValues);
    }
}
function processGuess(digits) {
    
}
function decrementMinutesLeft() {
    turnsLeft -= 1;
    updateDisplay();
}
function setDigit(value) {
    digitValues[digitPlace] = value
    shiftDigit();
    updateDisplay();
}
console.log(clearButton);
addEventListener("load", init);