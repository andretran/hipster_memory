var memoryApp = memoryApp || {}

var Card = memoryApp.card = function Card(logo_id){
  this.flipped = false,
  this.logo = 'images/' + logo_id + '.png',
  this.back = "images/cardback.jpg",
  this.position = null;
}

Card.prototype.flipCard = function(){
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
  console.log('working');
}
