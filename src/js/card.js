var memoryApp = memoryApp || {}

var Card = memoryApp.card = function Card(logo_id){
  this.flipped = false,
  this.logo = 'images/' + logo_id + '.png',
  this.back = "images/cardback.jpg",
  this.position = null;
}

Card.prototype.flip = function(){
  this.flipped = !this.flipped;
}

Card.prototype.oscillate = function(){
  if (this.flipped){
    return;
  }else if (this.position === 'left'){
    this.position = 'right';
  }else{
    this.position = 'left';
  }
}

Card.prototype.compare = function(card){
  return (this.logo === card.logo) ? true : false;
}
