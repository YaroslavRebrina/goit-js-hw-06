const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");


let list = [];

  ingredients.forEach(el => {
    const ingredientsListItem = document.createElement('li');

    ingredientsListItem.textContent = el;

    ingredientsListItem.classList.add(`item`);
    
    list.push(ingredientsListItem);
 }
)

ingredientsList.append(...list);