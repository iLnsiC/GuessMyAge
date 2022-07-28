let secretNumber, score, highScore, DOMSelector;//= Math.trunc(Math.random() * 20) + 1;
highScore = 0;

DOMSelector = {
  displayMessage: function(message){
    document.querySelector('.message').textContent = message;
  } ,
  displayNumber: function(number){
    document.querySelector('.number').textContent = number;
  } ,
  displayHighScore: function(highScore){
    document.querySelector('.highscore').textContent = highScore;
  } ,
  displayScore: function(score){
    document.querySelector('.score').textContent = score;
  } ,
  bgColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function comparer (){
  const guess = Number(document.querySelector('.guess').value);
  // No input
  if(!guess){
    DOMSelector.displayMessage('⛔ No Number!');
  }
  // when wins
  else if (guess === secretNumber) {
    DOMSelector.displayMessage('🎉 Correct Number!');
    DOMSelector.bgColor('#60b347'); 
    DOMSelector.displayNumber(secretNumber);
    if (score > highScore){
      highScore = score;
      DOMSelector.displayHighScore(highScore);
    }
  }
  else if (guess !== secretNumber){
    if (score > 1){
      DOMSelector.displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'/* jusqu'au ? c'est if et le : c'est else*/);
      score--;
      DOMSelector.displayScore(score);
    } else { // game stop when you hit 0
      DOMSelector.displayScore(0);    
      DOMSelector.displayMessage('💥 You Lost The Game!');
    }
  }
}

function restart (){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  ;
  DOMSelector.displayMessage('Start guessing...');
  DOMSelector.displayScore(score);
  DOMSelector.displayNumber('?');
  DOMSelector.bgColor('#222');
  document.querySelector('.guess').value = ' ';
}
restart();

// click on check!
document.querySelector('.check').addEventListener('click', comparer); // en cas de clique sur le bouton Check!
document.querySelector('.guess').addEventListener('keypress', function(event){ // en cas d'appuie sur Enter dans le saisi
  if(event.keyCode === 13 || event.which === 13){
    comparer();
  }
});
document.querySelector('.again').addEventListener('click', restart);