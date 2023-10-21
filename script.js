const buttons = [
    document.getElementById("buttonOne"),
    document.getElementById("buttonTwo"),
    document.getElementById("buttonThree")
];
const clearButton = document.getElementById("buttonClear")
const combinationDisplay = document.getElementById("vaultCode")
const log = document.getElementById("log")
let correctCombination = [];
let digitValues = [];
let turnsLeft = 7;
let digitPlace = 0;
const minutesLeftDisplay = document.getElementById("minutesLeftDisplay")
function clear() {
    digitPlace = 0;
    digitValues = [

    ],
    updateDisplay();
}
function init() {
    for(let i = 0; i < buttons.length; i++) {
        console.log(buttons);
        buttons[i].addEventListener("click", function(){setDigit(i + 1)});
    }
    clearButton.addEventListener("click", clear);
    newGame();
}
function newGame() {
    turnsLeft = 7;
    clear();
    randomizeCombination();
    console.log(correctCombination)
    updateDisplay();
}
function randomizeCombination() {
    var temp = 0;
    for(var i = 0; i < 3; i++) {
        temp += Math.floor(Math.random() * 3 + 1) * Math.pow(10, i)
    }
    correctCombination = temp;
}
function updateDisplay() {
    let combination = ""
    for(let i = 0; i < digitValues.length; i++) {
        if(digitValues[i] != 0) {
            combination += digitValues[i]
        }
    }
    combinationDisplay.textContent = combination;
    minutesLeftDisplay.textContent = turnsLeft;
}
function shiftDigit() {
    if(digitPlace != 2) {
        digitPlace += 1;
    } else {
        digitPlace = 0;
        if(processGuess(digitValues)) {
            logMessage("You unlocked the vault");
        } else {
            decrementMinutesLeft();
        }
        clear();
    }
}
function processGuess(digits) {
    let guess = 0;
    for(var i = 0; i < digits.length; i++) {
        guess += digits[i] * Math.pow(10, digits.length - i - 1);
    }
    console.log(guess);
    if(guess == correctCombination) {
        logMessage("Guess " + guess + " was correct!");
        return true;
    } else if(guess >= correctCombination) {
        logMessage("Guess " + guess + " was too high");
        return false;
    } else if(guess <= correctCombination) {
        logMessage("Guess " + guess + " was too low");
        return false;
    }
}
function decrementMinutesLeft() {
    turnsLeft -= 1;
    updateDisplay();
    return turnsLeft;
}
function setDigit(value) {
    digitValues[digitPlace] = value
    shiftDigit();
    updateDisplay();
}
function logMessage(message) {
    newLog = log.innerHTML + message + '<br/>';
    log.innerHTML = newLog
}
addEventListener("load", init);