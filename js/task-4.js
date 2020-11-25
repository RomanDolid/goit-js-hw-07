const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.getElementById('value');

btnIncrementRef.addEventListener('click', incr);
btnDecrementRef.addEventListener('click', decr);

let counterValue = 0;

function incr() {
  counterValueRef.textContent = counterValue += 1;
}

function decr() {
  if (counterValue === 0) {
    return;
  }
  counterValueRef.textContent = counterValue -= 1;
}
