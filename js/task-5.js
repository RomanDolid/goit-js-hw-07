const inputRef = document.getElementById('name-input');
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    outputRef.textContent = `незнакомец`;
  } else {
    outputRef.textContent = event.target.value;
  }
});
