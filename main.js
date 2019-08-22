$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked= null;
var matches = null;
var max_matches =2;


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
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
  } else {
    secondCardClicked = $(event.currentTarget);
    var nextDivBackgroundUrl1 = firstCardClicked.next().css('background-image');
    var nextDivBackgroundUrl2 = secondCardClicked.next().css('background-image');
      if (nextDivBackgroundUrl1 == nextDivBackgroundUrl2) {
      console.log('cards match');
      matches++;
        if(matches ===max_matches) {

        }
    } else (nextDivBackgroundUrl1 !== nextDivBackgroundUrl2)
      setTimeout(function () {
        hideClasses();
        console.log('class removed');
      }, 1500);
    }
  }
    function hideClasses(){
      firstCardClicked.removeClass('hidden');
      secondCardClicked.removeClass('hidden');
    }
