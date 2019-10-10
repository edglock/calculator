const display = document.querySelector('#display');
document.querySelectorAll('#numpad button')
    .forEach(btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

//document.querySelector('#cancel')


document.querySelector('#equal').addEventListener('click', evaluation);
function evaluation(){
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
