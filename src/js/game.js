var memoryApp = angular.module('memoryApp', []);

memoryApp.controller('CardsCtrl', function ($scope, $timeout){
  $scope.won = false;
  var cards = $scope.cards = [];
  var current_cards = [];
  var checkingCards = $scope.checkingCards = false;


  var logos = _.shuffle([0,0,1,1,2,2,3,3,4,4,5,5]);
  for (var i = 0; i < 12; i++){
    new_card = new Card(logos[i]);
    // $interval(new_card.oscillate, 2000);
    cards.push(new_card);

  }
  cards = _.shuffle(cards);


  $scope.changeState = function (card) {
    if (checkingCards){
      return;
    }
    card.flip();
    current_cards.push(card);
    if (current_cards.length === 2){
      checkingCards = true;
      $timeout(compareCards, 1500);
    }
  }

  function compareCards(){
      if (!current_cards[0].compare(current_cards[1])){
        current_cards[0].flip();
        current_cards[1].flip();
      }

      if (checkWon()){
        $scope.won = true;
      }
      current_cards = [];
      checkingCards = false;
      console.log(won);
  }

  function checkWon(){
    for (var i = 0; i < cards.length; i++){
      if (cards[i].flipped === false){
        return false;
      }
    }
    return true;
  }

});
