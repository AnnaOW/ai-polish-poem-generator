function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#polish-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9a4cbff04f4e654ca4teaa03bc88aoaf";
  let prompt = `User instructions: Generate a poem in Polish language about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generatea 4 line poem in basic HTML. Always separate each line with <br />. Sign the poem as SheCodes AI inside the <strong> element at the end of the poem, and never at the beginning. Do not include any title to the poem. Make sure to follow the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem, please wait...");

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
