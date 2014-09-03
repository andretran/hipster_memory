var memoryApp = memoryApp || {}

var Card = memoryApp.card = function Card(face){
  this.hidden = true,
  this.face = "images/guy" + face + "png"
}
