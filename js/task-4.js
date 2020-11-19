const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.getElementById('value');

btnIncrementRef.addEventListener('click', incr);
btnDecrementRef.addEventListener('click', decr);

let counterValue = Number(counterValueRef.textContent);
function incr() {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
}

function decr() {
  counterValue > 0 ? (counterValue -= 1) : (counterValue = 0);
  counterValueRef.textContent = counterValue;
}
