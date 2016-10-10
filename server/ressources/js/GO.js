function GO(game) {
	this.game = game;
	this.GOSprite = null;
  this.textGO = null;
};

var GOTab = new Array();
var GOTabShot = new Array();

GO.prototype.create = function create() {
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  //  The Text is positioned at 0, 100


	textGO = game.add.text(game.world.centerX+100, game.world.centerY, "GO", style);
  textGO.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

GO.prototype.update = function update() {
  textGO.setText("GO updated");
};
