const display = document.querySelector('#display');
let operatorInputed = false;

document.querySelectorAll('#numpad .numbers')
    .forEach(nmb => nmb.addEventListener('click', nmbClicked));

function nmbClicked(ev) {
    display.value += ev.target.innerText;
    operatorInputed = false;
}
document.querySelectorAll('#numpad .operators')
    .forEach(opr => opr.addEventListener('click', oprClicked));

function oprClicked(ev) {
    if (operatorInputed === true) sliceArgument(1);
    display.value += ev.target.innerText;
    operatorInputed = true;
}
function sliceArgument(sliceStep) {
    display.value=display.value.slice(0, display.value.length - sliceStep);
}
document.querySelector('#cancel').addEventListener('click', () => display.value = null);

document.querySelector('#backspace').addEventListener('click', () => sliceArgument(1));

document.querySelector('#percent').addEventListener('click', () => prcntClicked());

function prcntClicked() {
    display.value = display.value + '%';
}

document.querySelector('#equal').addEventListener('click', evaluation);

function evaluation() {
    devideByZeroDetection();
    display.value = eval(display.value);
}

function devideByZeroDetection() {
    let slashPosition = -1;
    let slashCount = 0;
    let arrayForPosition = [];
    do {
	    slashPosition = display.value.indexOf("/0", slashPosition + 1);
        if (slashPosition !== -1) arrayForPosition.push(slashPosition);
    }
    while (slashPosition !== -1);
    for(let i = 0; i < arrayForPosition.length; i++){
	    if(display.value[arrayForPosition[i] + 2] == ".") slashCount++;
    }
    if (arrayForPosition.length > slashCount) display.value = "error: devide by zero";
}
