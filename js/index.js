const display = document.querySelector('#display');
const additionalDisplay = document.querySelector('#memory');
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
sliceArgument = (sliceStep) => display.value=display.value.slice(0, display.value.length - sliceStep);

document.querySelector('#cancel').addEventListener('click', () => display.value = null);

document.querySelector('#backspace').addEventListener('click', () => sliceArgument(1));

document.querySelector('#root').addEventListener('click', () => display.value = Math.sqrt(display.value));

document.querySelector('#mplus').addEventListener('click', () => additionalDisplay.value = eval(additionalDisplay.value + '+' + display.value));

document.querySelector('#mminus').addEventListener('click', () => additionalDisplay.value = eval(additionalDisplay.value + '-' + display.value));

document.querySelector('#mr').addEventListener('click', () => display.value = additionalDisplay.value);

document.querySelector('#mc').addEventListener('click', () => additionalDisplay.value = null);

document.querySelector('#equal').addEventListener('click', evaluation);

function evaluation() {
    divideByZeroDetection();
    display.value = eval(display.value);
}

function divideByZeroDetection() {
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
    if (arrayForPosition.length > slashCount) display.value = "error: divide by zero";
}
