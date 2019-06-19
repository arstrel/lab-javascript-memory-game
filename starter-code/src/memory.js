class MemoryGame {
  constructor(cards){
    this.cards = cards;

    // array, where we will be storing 
    // the cards the user have clicked so we can compare them
    this.pickedCards = [];

    // will be adding every time a user choose and guess a pair
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

//   -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]
  shuffleCards() {
    let shuffledDeck = [...this.cards]
    let currentIndex = shuffledDeck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffledDeck[currentIndex];
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
    shuffledDeck[randomIndex] = temporaryValue;
    } 
  
    this.cards = [...shuffledDeck]
  }

  //expects a string with a name of hero, like cards[i].name 
  checkIfPair() {
    let card1 = this.pickedCards[0];
    let card2 = this.pickedCards[1];

    this.pairsClicked += 1;
    if(card1.dataset.cardName == card2.dataset.cardName) {
      this.pairsGuessed += 1;
      this.pickedCards = [];
      
      $('.card').removeClass('blocked')
      return true
    } else {
     
      setTimeout(() => {
      $(this.pickedCards[0]).children().toggleClass('front back');
      $(this.pickedCards[1]).children().toggleClass('front back'); 
      this.pickedCards = [];
      $('.card').removeClass('blocked')
    }, 600)
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == 12) {
      return true
    } else {
      return false
    }
  }

  reset() {
  
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    
  }
}