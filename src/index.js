function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#polish-poem", {
    strings: "Oboje są przekonani, że połączyło ich uczucie nagłe.",
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
