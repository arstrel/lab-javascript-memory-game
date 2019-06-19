var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);
// memoryGame.shuffleCards();
//uncomment this^^^^^ to enable shuffling on load

document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Flip the card when clicked on
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      // TODO: write some code here
      $(this).toggleClass('back front');
      $(this).next().toggleClass('front back')
     
    }
  });
  
  //adding clicked cards to pickedcards array
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {
    memoryGame.pickedCards.push(card);
      
  if(memoryGame.pickedCards.length == 2) {
    $('.card').addClass('blocked');
    memoryGame.checkIfPair()
    
    $('#pairs_clicked').html(memoryGame.pairsClicked )
    $('#pairs_guessed').html(memoryGame.pairsGuessed )
   
  }
  
  if(memoryGame.isFinished()) {
    setTimeout(() => {
      memoryGame.reset();
      alert('You are the champion!')
      $('#pairs_clicked').html(memoryGame.pairsClicked )
      $('#pairs_guessed').html(memoryGame.pairsGuessed )
      $('.card').children().toggleClass('front back');
      memoryGame.shuffleCards();
    }, 1000)

  
  //  location.reload(true)
  
  }
}
});



  
  //end of DOMContentLoaded listener event
});



