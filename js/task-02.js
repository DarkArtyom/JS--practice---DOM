const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const IngredientsEl = ingredients.map((ingredient) => {
  const ingredientItems = document.createElement("li");
  ingredientItems.classList.add("item");
  ingredientItems.textContent = ingredient;
  return ingredientItems;
});

const listIngredients = document.querySelector("#ingredients");
listIngredients.textContent = "For soup you need:";
listIngredients.append(...IngredientsEl);
