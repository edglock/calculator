const display = document.querySelector('#display');
document.querySelectorAll('#numpad button')
    .forEach(btn => btn.addEventListener('click', btnClicked));

function btnClicked(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click' ,
  () => display.value = eval(display.value));

