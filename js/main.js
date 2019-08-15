// DOM elements
const modal = document.querySelector(".modal");
const gif = document.querySelector("#egg iframe");

let easterEgg = [];

// keydown event listener
document.addEventListener("keydown", e => {
  easterEgg.push(e.keyCode.toString()); // convert whatever user types to string and push to array
  if (
    JSON.stringify(easterEgg) === // convert array to string and check if correct
    JSON.stringify([
      "78",
      "79",
      "80",
      "65",
      "73",
      "78",
      "78",
      "79",
      "71",
      "65",
      "73",
      "78"
    ])
  ) {
    modal.classList.toggle("display"); // toggle modal display
    gif.style.display = "block"; // toggle gif display to block
    easterEgg = []; // empty array
  }
});
