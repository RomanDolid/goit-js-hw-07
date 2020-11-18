console.log('Task-7');

const rangeFontSizeRef = document.querySelector('[type = "range"]');
const changeFontSizeTextRef = document.querySelector('[id="text"]');
const currentValueRange = rangeFontSizeRef.value;
changeFontSizeTextRef.style.fontSize = '16px';
const currentFontSizeText = Number.parseInt(
  changeFontSizeTextRef.style.fontSize,
);

rangeFontSizeRef.addEventListener('input', event => {
  const changeValue = (event.target.value - currentValueRange) / 100;
  const x = changeValue * currentFontSizeText + currentFontSizeText;
  changeFontSizeTextRef.style.fontSize = x + 'px';
});
