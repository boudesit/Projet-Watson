function Duration(game) {
	this.game = game;
	this.DurationSprite = null;
  this.textDuration = null;
};

var DurationTab = new Array();
var DurationTabShot = new Array();


Duration.prototype.create = function create() {

  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

  //  The Text is positioned at 0, 100
  textDuration = game.add.text(300, 0, "text", style);
  textDuration.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

};

Duration.prototype.update = function update() {
  textDuration.setText("text modified");

};
