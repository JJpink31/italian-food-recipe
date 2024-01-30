function displayRecipe(response) {
  new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:""
});
}


function generateRecipe(event) {
    event.preventDefault();

   let instructionInput = document.querySelector("#user-instructions");
    let prompt= `User instructions: Generate an Italian food recipe about ${instructionInput.value}`;
    let context=" You are talented chef with a lot of wisdom about Italain cuisine. Please generate an Italian recipe that has both ingredients and cooktime. Written in html, each line must have a <br />. Make sure to follow user instructions."
    let apikey="f8833caao3caf01e1ffbc8t348acfb03";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

    console.log("Generating recipe");
    console.log (`Prompts: ${prompt}`);
    console.log (`Context: ${context}`);

 axios.get(apiUrl).then(displayRecipe);   
}

let recipeElement = document.querySelector("#recipe-form");
recipeElement.addEventListener("submit", generateRecipe);