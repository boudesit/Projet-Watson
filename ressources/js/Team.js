function Team(game) {
	this.game = game;
	this.TeamSprite = null;
  this.textTeam = null;
	this.text = null;
	this.cost = 0;
};

var TeamTab = new Array();
var TeamTabShot = new Array();

var teamCVs = new Array();

Team.prototype.create = function create() {

	sprite = game.add.sprite(0,200, 'bloc');
	sprite.inputEnabled = true;

	var style = { font: "24px Black Chancery", fill: "#000000", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };

	this.text = "Team :\n";

  this.textTeam = game.add.text(30, 220, this.text, style);
};

Team.prototype.update = function update() {
	var text = "Team :\n";
	var cost = 0;
	for (var i = 0; i < teamCVs.length; i++) {
		 text+="- "+teamCVs[i].getNom()+" "+teamCVs[i].getPoste()+"\n";
		 cost+= teamCVs[i].getCouts();
	}
	this.cost = cost;
  this.textTeam.setText(text);
};

Team.prototype.getTeamCVs = function update() {
	return teamCVs;
};

Team.prototype.getCost = function getCost() {
	return this.cost;
};

//Team.prototype.update = function update() {
//};
