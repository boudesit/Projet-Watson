function Team(game) {
	this.game = game;
	this.TeamSprite = null;
  this.textTeam = null;
};

var TeamTab = new Array();
var TeamTabShot = new Array();

var teamCVs = new Array();

Team.prototype.create = function create() {
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "top", boundsAlignV: "left" };

	var text = "Team :";

  textTeam = game.add.text(0, 100, text, style);
  textTeam.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

Team.prototype.update = function update() {

	var text = "Team :\n";
	for (var i = 0; i < teamCVs.length; i++) {
		text+="- "+teamCVs[i].getNom()+" "+teamCVs[i].getPoste()+"\n";
	}
  textTeam.setText(text);
};

Team.prototype.getTeamCVs = function update() {
	return teamCVs;
};

//Team.prototype.update = function update() {
//};
