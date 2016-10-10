function CV(game) {
	this.game = game;
	this.CVSprite = null;
  this.textCV = null;
};

var CVTab = new Array();
var CVTabShot = new Array();

CV.prototype.create = function create() {
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  //  The Text is positioned at 0, 100
  textCV = game.add.text(game.world.centerX-100,game.world.centerY, "CV", style);
  textCV.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

CV.prototype.update = function update() {
  textCV.setText("CV updated");
};
