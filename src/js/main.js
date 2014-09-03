$(function(){
  _.each($('.front'),function(card){
    var $card = $(card);
    $card.click(function() {
      $card.flip({
        direction: 'lr',
        content: '<img src="images/front.jpg" class="front">'
      });
    });
  });
});
