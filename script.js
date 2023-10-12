const buttons = [
    document.getElementById("buttonOne"),
    document.getElementById("buttonTwo"),
    document.getElementById("buttonThree")
];
let digitValues = [
    1,
    1,
    1
];
const codeDigits = [
    document.getElementById("digitOne"),
    document.getElementById("digitTwo"),
    document.getElementById("digitThree")
];
let turnsLeft = 7;
let minutesLeftDisplay = document.getElementById("minutesLeftDisplay")
function init() {
    turnsLeft = 7;
    digitValues = [
        1,
        1,
        1,
    ];
    updateDisplay();
}
function updateDisplay() {
    for(let i = 0; i < digitValues.length; i++) {
        codeDigits[i].textContent = digitValues[i];
    }
    
}
function addToDigit(digit) {
    if(digitValues[digit] == 3) {
        
    }
}
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", )
}