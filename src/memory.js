class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards = this.cards) {
    if(!cards) {
      return; 
    }
    for (let i = this.cards.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
    return cards;
  }

  checkIfPair(card1, card2) {
   this.pairsClicked++;
   const isPair = card1 === card2;
   if(isPair) {
    this.pairsGuessed++;
   }
   return isPair;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
