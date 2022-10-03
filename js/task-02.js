const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createLiRef = ingredients.map((ingredient) => {

  const liIngridientRef = document.createElement('li');
  console.log(liIngridientRef);
  
  liIngridientRef.classList.add('item');
  
  liIngridientRef.textContent = ingredient;
  
  return liIngridientRef;

  });

 const ulIngredientsRef = document.querySelector("#ingredients");

 ulIngredientsRef.append(...createLiRef);
