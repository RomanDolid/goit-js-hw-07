console.log('Task-4');

const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.getElementById('value');

btnIncrementRef.addEventListener('click', incr);
btnDecrementRef.addEventListener('click', decr);

function incr(event) {
  counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
}
function decr(event) {
  Number(counterValueRef.textContent) > 0
    ? (counterValueRef.textContent = Number(counterValueRef.textContent) - 1)
    : (counterValueRef.textContent = 0);
}
