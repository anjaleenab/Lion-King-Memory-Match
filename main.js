$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked= null;
var matches = null;
var max_matches =2;
var clickCounter = 0;
var attempts = null;
var games_played =null;


function initializeApp (){
$(".lfz-card").on("click", handleCardClick);

}


function handleCardClick (event) {
$(event.currentTarget).addClass("hidden");
matchCards();
console.log(attempts);
displayStats();

}

function matchCards() {
  console.log('Event:', event.currentTarget);
  if (clickCounter === 0) {
    firstCardClicked = $(event.currentTarget);
    clickCounter++;
  } else if(clickCounter > 0 ){
    secondCardClicked = $(event.currentTarget);
    var nextDivBackgroundUrl1 = firstCardClicked.next().css('background-image');
    var nextDivBackgroundUrl2 = secondCardClicked.next().css('background-image');
    console.log(nextDivBackgroundUrl1);
    console.log(nextDivBackgroundUrl2);
      if (nextDivBackgroundUrl1 == nextDivBackgroundUrl2) {
      console.log('cards match');
      matches++;
        setNulls();
        attempts++;
        if(matches === max_matches){
          console.log('Out of matches!');
        $('#modal').removeClass('hide-modal');
        $('#modal-button').removeClass('hide-modal');
        $('#modal').on('click',hideModal);
        games_played++;
        setNulls();

    }
    } else if (nextDivBackgroundUrl1 !== nextDivBackgroundUrl2){
      setTimeout(function () {
        hideClasses();
        console.log('class removed');
      }, 1500);
        setNulls();
        attempts++;

    }
    console.log(matches);
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
      console.log('modal button has been clicked');
      hideClasses();
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
