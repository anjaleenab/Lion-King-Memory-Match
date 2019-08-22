$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked= null;
var matches = null;




function initializeApp (){
$(".lfz-card").on("click", handleCardClick);

}

function handleCardClick (event) {
$(event.currentTarget).addClass("hidden");
  console.log('Event:', event.currentTarget);
  if (firstCardClicked == null) {
    firstCardClicked = $(event.currentTarget);
    } if (firstCardClicked) {
    secondCardClicked = $(event.currentTarget);
    }
var nextDivBackgroundUrl1 = firstCardClicked.next().css('background-image', 'url');
console.log(nextDivBackgroundUrl1);
var nextDivBackgroundUrl2 = secondCardClicked.next().css('background-image', 'url');


  if(nextDivBackgroundUrl1 === nextDivBackgroundUrl2){
    console.log('cards match');
    matches++;
  } else {
    setTimeout(function(){
    firstCardClicked.removeClass('hidden');
    secondCardClicked.removeClass('hidden');
    console.log('class removed');
    }, 1500);
  }




  }
