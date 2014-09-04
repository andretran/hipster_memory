var memoryApp = angular.module('memoryApp', []);

memoryApp.controller('CardsCtrl', function ($scope, $interval){
  var cards = $scope.cards = [];
  var logos = _.shuffle([0,0,1,1,2,2,3,3,4,4,5,5]);
  for (var i = 0; i < 12; i++){
    new_card = new Card(logos[i]);
    $interval(new_card.oscillate, 2000);
    cards.push(new_card);

  }
  cards = _.shuffle(cards);
});
