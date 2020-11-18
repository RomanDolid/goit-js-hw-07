console.log('Task-6');

const inputValidRef = document.getElementById('validation-input');

inputValidRef.addEventListener('change', e => {
  const inputVal = Number(e.target.value.length);
  const dataVal = Number(inputValidRef.dataset.length);
  if (inputVal !== dataVal) {
    inputValidRef.classList.add('invalid');
    inputValidRef.classList.remove('valid');
    alert('Ввод выполнен не вернно. Повторите попытку');
  } else {
    inputValidRef.classList.add('valid');
    inputValidRef.classList.remove('invalid');
  }
});
