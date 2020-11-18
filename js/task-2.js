console.log('Task-2')

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const createListItem = ((arr, id) => {
    arr.forEach(element => {
        const itemRef = document.createElement('li');
        itemRef.textContent = element;
        id.appendChild(itemRef);
    });
});

const ingredientsRef = document.getElementById('ingredients');
createListItem(ingredients, ingredientsRef);
console.log(ingredientsRef);

