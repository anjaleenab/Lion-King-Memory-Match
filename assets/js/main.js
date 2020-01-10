$(document).ready(initializeApp);

var firstCardClicked;
var secondCardClicked;
var matches = null;
var max_matches =9;
var clickCounter = 0;
var attempts = null;
var games_played =null;


function initializeApp (){
  if ($('.container-div')) {
    $('.container-div').remove();
  }
  createCards();
$(".cover-card")
  .on("click", handleCardClick);
}

function handleCardClick (event) {
$(event.currentTarget)
  .addClass("hidden");
  matchCards();
  displayStats();

}

function matchCards() {
  if (clickCounter === 0) {
    firstCardClicked = $(event.currentTarget);
    clickCounter++;
  } else if(clickCounter > 0 ){
    secondCardClicked = $(event.currentTarget);
    var nextDivBackgroundUrl1 = firstCardClicked.next().css('background-image');
    var nextDivBackgroundUrl2 = secondCardClicked.next().css('background-image');
      if (nextDivBackgroundUrl1 == nextDivBackgroundUrl2) {
        firstCardClicked.parent().removeClass('hover');
        secondCardClicked.parent().removeClass('hover');
      matches++;
        setNulls();
        attempts++;
        if(matches === max_matches){
          createModal();
        $('.modal-button')
        .on('click', removeModal);
        games_played++;
        setNulls();
    }
    } else if (nextDivBackgroundUrl1 !== nextDivBackgroundUrl2 ){
      noClick();
      setTimeout(function () {
        firstCardClicked.removeClass('hidden');
        secondCardClicked.removeClass('hidden');
        setNulls();
      }, 1500);

        attempts++;
        setTimeout(function () {
          addClick() }, 1700);
        }
      }
    }

    function noClick() {
    $('.container-div')
    .removeClass('container-div')
    .addClass('container-div disabled');
    }

    function addClick() {
    $('.disabled')
    .removeClass('disabled')
    }

    function setNulls(){
    firstCardClicked = null;
    secondCardClicked = null;
    clickCounter = 0;
    return firstCardClicked, secondCardClicked, clickCounter;

    }

    function removeModal(){
    $('.modal').remove();
    resetGame();
    }

    function calculateAccuracy (){
    var accuracy = matches / attempts;
    var accuracyPercent = Math.round(accuracy *100);
      if (attempts <1) {
        stringAccuracy = '0%';
      } else {
        var stringAccuracy = accuracyPercent + '%';
      }
    return stringAccuracy;
    }

    function displayStats(){
      if(!games_played) {
        games_played= '0';
      }
      if (!attempts) {
        attempts = '0';
      }
    $('#stat1')
    .text(games_played);
    $('#stat2')
    .text(attempts);
    $('#stat3')
    .text(calculateAccuracy);

    }

    function resetGame(){
      matches = null;
      attempts = null;
      displayStats();
      initializeApp();
      return matches, attempts;
    }

    function createModal() {
      var modalDiv =$('<div>').text('Congratulations, you won!').addClass('modal');
      modalDiv.appendTo('body');
      var modalButton = $('<button>').text('Play Again').addClass('modal-button');
      modalButton.appendTo(modalDiv);
    }

    var cardClassArray = ['hyena', 'zazu', 'mufasa', 'pumba', 'rafiki', 'scar', 'simba', 'timon', 'nala'];

    function createCards() {
      for(var index =0; index<2; index++){
        randomizeCardArray();
        for (var classIndex = 0; classIndex < cardClassArray.length; classIndex++) {
          var containerDiv = $('<div>', {
            class: 'container-div hover'
          });
          var cardCover = $('<div>', {
            class: 'cover-card'
          });
          var card = $('<div>', {
            class: cardClassArray[classIndex] + ' bottom-card'
          });
          containerDiv.append(cardCover);
          containerDiv.append(card);
          $('#container').append(containerDiv);
        }
      }
    }

    function randomizeCardArray() {
      for (var placeHolder = cardClassArray.length - 1; placeHolder > 0; placeHolder--) {
        var newSpot = Math.floor(Math.random() * placeHolder);
        var temp = cardClassArray[placeHolder];
        cardClassArray[placeHolder] = cardClassArray[newSpot];
        cardClassArray[newSpot] = temp;
      }
    }
