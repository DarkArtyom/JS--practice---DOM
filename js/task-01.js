const categoriesEL = document.querySelectorAll(".item h2");
console.log(`Nember of Categories: ${categoriesEL.length}`);

const countEl = document.querySelectorAll(".item");
countEl.forEach((el) => {
  return console.log(
    `Category: ${el.children[0].textContent}; 
Elements: ${el.lastElementChild.children.length}`
  );
});
