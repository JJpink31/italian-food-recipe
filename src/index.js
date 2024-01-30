function generateRecipe(event) {
    event.preventDefault();

    new Typewriter('#recipe', {
  strings: "Recipe will go here",
  autoStart: true,
  delay: 1,
  cursor:"",
});
}

let recipeElement = document.querySelector("#recipe-form");
recipeElement.addEventListener("submit", generateRecipe);