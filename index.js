// importing from other file
import cards from "./cards.js";
import MemoryGame from "./Choicesmemo.js";
const memoryGame = new MemoryGame(cards);
// Creating an instance of the MemoryGame
let html = "";

let score = 0;

cards.forEach((pic) => {
  html += `
      <div class="${pic.name} card" data-info="${pic.info}" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}" ></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat center center; background-size: 71px 71px;"></div>
      </div>
    `;

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  // Set up an object to hold the information for each match
  const infoBox = document.getElementById("info-box");
  const closeBtn = document.getElementById("close-button");
  const infoBoxParagraph = document.getElementById("info-box-paragraph");
  closeBtn.addEventListener("click", () => {
    infoBox.style.display = "none";
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("turned");
      memoryGame.pickCards.push(card);
      if (memoryGame.pickCards.length === 2) {
        document.getElementById("pairs-clicked").innerText++;
        const firstCard = memoryGame.pickCards[0];
        const secondCard = memoryGame.pickCards[1];
        const firstName = firstCard.dataset.cardName;
        const secondName = secondCard.dataset.cardName;
        if (memoryGame.checkIfPair(firstName, secondName)) {
          setTimeout(() => {
            infoBox.style.display = "block";
            infoBoxParagraph.innerHTML = firstCard.dataset.info;
          }, 1000);

          document.getElementById("pairs-guessed").innerText++;
        } else {
          setTimeout(() => {
            firstCard.classList.remove("turned");
            secondCard.classList.remove("turned");
          }, 1000);
        }
        memoryGame.pickCards = [];
      }

      let nameOfTheCardCLicked = card.dataset.cardName;
      document
        .querySelectorAll("." + card.dataset.cardName)
        .forEach((el, index) => {
          if (el.classList.contains("turned") && index > 0) {
            score += 1;
          } else {
            score;
          }
        });
      console.log(score);
    });
  });
});
