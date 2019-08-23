$(document).ready(initializeApp);

debugger;
var firstCardClicked = null;
var secondCardClicked= null;
var matches = null;
var max_matches =2;
var clickCounter = 0;

function initializeApp (){
$(".lfz-card").on("click", handleCardClick);

}



// var nextDivBackgroundUrls = [];
// var lastDivBackgroundUrl = nextDivBackgroundUrls[nextDivBackgroundUrls.length - 1];
// console.log(lastDivBackgroundUrl);
// console.log(nextDivBackgroundUrls);
function handleCardClick (event) {
$(event.currentTarget).addClass("hidden");
matchCards();
}

function matchCards() {

  console.log('Event:', event.currentTarget);
  if (clickCounter === 0) {
    firstCardClicked = $(event.currentTarget);
    clickCounter++;
  } else if(clickCounter > 0){
    secondCardClicked = $(event.currentTarget);
    var nextDivBackgroundUrl1 = firstCardClicked.next().css('background-image');
    var nextDivBackgroundUrl2 = secondCardClicked.next().css('background-image');
    console.log(nextDivBackgroundUrl1);
    console.log(nextDivBackgroundUrl2);
      if (nextDivBackgroundUrl1 == nextDivBackgroundUrl2) {
      console.log('cards match');
      matches++;

        if(matches === max_matches){
      var modal = $('modal').addClass('modal').css('display:', 'show').text('Congratulations, you won!');
      }
    } else if (nextDivBackgroundUrl1 !== nextDivBackgroundUrl2){
      setTimeout(function () {
        hideClasses();
        console.log('class removed');
      }, 1500);
    clickCounter = 0;
      }
    }
  }

    function hideClasses(){
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden');
    }
