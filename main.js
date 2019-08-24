$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked= null;
var matches = null;
var max_matches =9;
var clickCounter = 0;
var attempts = null;
var games_played =null;


function initializeApp (){
$(".lfz-card").on("click", handleCardClick);

}


function handleCardClick (event) {
$(event.currentTarget).addClass("hidden");
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
      matches++;
        setNulls();
        attempts++;
        if(matches === max_matches){
        $('#modal').removeClass('hide-modal');
        $('#modal-button').removeClass('hide-modal');
        $('#modal').on('click',hideModal);
        games_played++;
        setNulls();

    }
    } else if (nextDivBackgroundUrl1 !== nextDivBackgroundUrl2){
      setTimeout(function () {
        hideClasses();
      }, 1500);
        setNulls();
        attempts++;

    }
  }
}

    function hideClasses(){
      $('.hidden').removeClass('hidden');
      matches =0;
      return matches;

    }

    function setNulls(){
      firstCardClicked = null;
      secondCardClicked = null;
      clickCounter = 0;
      return firstCardClicked, secondCardClicked, clickCounter;

    }

    function hideModal(){
      $('#modal').addClass('hide-modal');
      $('#modal-button').addClass('hide-modal');
      hideClasses();
      resetGame();
    }


    function calculateAccuracy (){
 var accuracy = matches / attempts;
 var accuracyPercent = accuracy *100;
      if (attempts <=1) {
        stringAccuracy = '0%';
      } else {
        var stringAccuracy = accuracyPercent + '%';
      }
 return stringAccuracy;
    }

    function displayStats(){
$('#stat1').text(games_played);
$('#stat2').text(attempts);
$('#stat3').text(calculateAccuracy);

    }

    function resetGame(){
      matches = null;
      attempts = null;
      games_played++;
      displayStats();
      return matches, attempts;
    }
