const rangeFontSizeRef = document.querySelector('[type = "range"]');
const changeFontSizeTextRef = document.querySelector('[id="text"]');

rangeFontSizeRef.addEventListener('input', event => {
  if (event.target.value <= 6) {
    changeFontSizeTextRef.style.fontSize = '6px';
  } else {
    changeFontSizeTextRef.style.fontSize = event.target.value + 'px';
  }
});
