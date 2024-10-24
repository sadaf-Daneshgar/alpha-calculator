const numBtns = document.querySelectorAll('.btn');
const inputElem = document.querySelector('input');
const resetBtn = document.querySelector('.btn-danger');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const sumBtn = document.querySelector('.sum');
const subBtn = document.querySelector('.sub');
const mulBtn = document.querySelector('.mul');
const divBtn = document.querySelector('.div');

let num1 = '';
let num2 = '';
let operator = '';
let result = '';

numBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    inputElem.value += btn.textContent;
  });
});

sumBtn.addEventListener('click', () => {
  num1 = inputElem.value;
  operator = '+';
  inputElem.value = '';
});

subBtn.addEventListener('click', () => {
  num1 = inputElem.value;
  operator = '-';
  inputElem.value = '';
});

mulBtn.addEventListener('click', () => {
  num1 = inputElem.value;
  operator = '*';
  inputElem.value = '';
});

divBtn.addEventListener('click', () => {
  num1 = inputElem.value;
  operator = '/';
  inputElem.value = '';
});

clearBtn.addEventListener('click', () => {
  inputElem.value = inputElem.value.slice(0, -1);
});

equalBtn.addEventListener('click', () => {
  num2 = inputElem.value;
  if (operator === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === '*') {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === '/') {
    result = parseFloat(num1) / parseFloat(num2);
  }
  inputElem.value = result;
});

resetBtn.addEventListener('click', () => {
  inputElem.value = '';
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
});
