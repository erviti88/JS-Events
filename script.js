/* Iteración #1: Creando Events */

"use strict";

/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

const boton = document.createElement('button');

boton.setAttribute('id','btnToClick');
boton.innerText += "Click on me!";

boton.addEventListener('click', getEventInfo);
function getEventInfo(event) {
    console.log(event);
}

document.body.append(boton);

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const addFocus = document.querySelector('.focus');

addFocus.addEventListener('focus', getInputValue);
function getInputValue(event) {
    console.log(event.target.value);
}

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const addInput = document.querySelector('.value');

addFocus.addEventListener('input', getInputValue2);
function getInputValue2(event) {
    console.log(event.target.value);
}
