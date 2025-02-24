const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('turned') && memoryGame.pickedCards.length < 2) {
        cards.classList.add('turned');
        memoryGame.pickedCards.push(card);

        if (memoryGame.pickedCards.length === 2) {
          const [card1, card2] = memoryGame.pickedCards;
          const isPair =memoryGame.checkIfFinished(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'));

          const pairsClicked = document.getElementById('pairs-clicked');
          const pairsGuessed = document.getElementById('pairs-guessed');
          pairsClicked.textContent = memoryGame.pairsClicked;
          if (isPair) {
            pairsGuessed.textContent = memoryGame.pairsGuessed;
            if (memoryGame.checkIfFinished()) {
              setTimeout(() => {
                alert('Congratulations! You won!');
              }, 500);
            }
          } else {
            setTimeout(() => {
              card1.classList.remove('turned');
              card2.classList.remove('turned');
              memoryGame.pickedCards = [];
            }, 1000);
          }
        }
      }
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
    });
  });
});
