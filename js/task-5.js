console.log('Task-5');

const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
  event.target.value === ''
    ? (outputRef.textContent = `незнакомец`)
    : (outputRef.textContent = event.target.value);
});
