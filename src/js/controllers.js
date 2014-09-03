var memoryApp = angular.module('memoryApp', []);

memoryApp.controller('CardsCtrl', function ($scope){
  $scope.cards = [
    new Card(1),
    new Card(2)
  ];
});
