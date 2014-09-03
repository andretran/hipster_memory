var memoryApp = memoryApp || {}

var Card = memoryApp.card = function Card(){
  this.flipped = false,
  this.face = "images/cardback.jpg"
}

Card.prototype.flipCard = function(){
  this.flipped = !this.flipped;
}
