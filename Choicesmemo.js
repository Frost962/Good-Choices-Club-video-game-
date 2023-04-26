class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// exporting MemoryGame class
export default MemoryGame;
