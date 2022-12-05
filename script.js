let quoteArea = document.querySelector(".quote");
let author = document.querySelector(".author");

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((result) => result.json())
    .then((data) => {
      quoteArea.textContent = data.content;
      author.textContent = `- ${data.author}`;
    });
}

window.addEventListener("load", randomQuote);
