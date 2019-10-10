const display = document.querySelector('#display');
document.querySelectorAll('#numpad button')
    .forEach(btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

//document.querySelector('#cancel')

//document.querySelector('#equal').addEventListener('click' ,
//() => display.value = eval(display.value));
document.querySelector('#equal').addEventListener('click', evaluation);
function evaluation(){
    //let zero = display.value.length;
    //display.value = display.value.slice(zero-2, zero);
    display.value = eval(display.value);
}
