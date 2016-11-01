function Duration(game) {
	this.game = game;
	this.DurationSprite = null;
  this.textDuration = null;
  this.duration = null;
	this.projectSize = null;
};

var DurationTab = new Array();
var DurationTabShot = new Array();


Duration.prototype.create = function create() {

  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

  //  The Text is positioned at 0, 100
  textDuration = game.add.text(300, 0, "duration: ", style);
  textDuration.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

};

Duration.prototype.update = function update() {
	this.game.duration = this.getDuration();
  textDuration.setText("Duration : " + this.getDuration() + "month  Max: "+ this.getMaxPerson() );

};

Duration.prototype.setDuration  = function setDuration(duration){

  this.duration = duration;
};

Duration.prototype.getDuration = function getDuration() {
  return this.duration;
};

Duration.prototype.setMaxPerson = function setMaxPerson(projectSize){
	this.projectSize = projectSize;
};

Duration.prototype.getMaxPerson = function getMaxPerson(){
	return this.projectSize ;
};
