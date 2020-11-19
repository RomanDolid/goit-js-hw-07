const countCategoriesRef = document.querySelectorAll('.item');
console.log(
  `Kоличество категорий в 'ul#categories' - ${countCategoriesRef.length}`,
);

countCategoriesRef.forEach(el => {
  console.log(
    `Категория: ${el.firstElementChild.textContent} \nКоличество элементов: ${el.lastElementChild.children.length}`,
  );
});
