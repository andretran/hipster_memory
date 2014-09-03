var memoryApp = angular.module('memoryApp', []);

memoryApp.controller('CardsCtrl', function ($scope){
  var cards = $scope.cards = [];


  for (var i = 0; i < 12; i++){
    cards.push(new Card());
  }
});
