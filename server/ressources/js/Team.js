function Team(game) {
	this.game = game;
	this.TeamSprite = null;
  this.textTeam = null;
};

var TeamTab = new Array();
var TeamTabShot = new Array();

Team.prototype.create = function create() {
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  //  The Text is positioned at 0, 100
  textTeam = game.add.text(game.world.centerX-100, 500, "Team", style);
  textTeam.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

Team.prototype.update = function update() {
  textTeam.setText("Team updated");
};
