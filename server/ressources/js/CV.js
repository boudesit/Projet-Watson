function CV(game) {
	this.game = game;
	this.CVSprite = null;
  this.textCompetence = null;
	this.textHobby = null;
	this.textPersonalite = null;
	this.textCouts = null;
	this.textPoste = null;
};

// un CV est un cadre reprenant une photo, une liste de données

var image;
var competence;
var hobby;
var personalite;
var couts;
var poste;

var CVTab = new Array();
var CVTabShot = new Array();

CV.prototype.create = function create() {
  var style = { font: "bold 15px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
  //  The Text is positioned at 0, 100

	var graphics = game.add.graphics(100, 100);
	graphics.beginFill(0xebebe0);
	var CVLayout = graphics.drawRect(200, 100, 200, 300);
	graphics.endFill();

	var profilPicture = game.add.sprite(325, 210, 'profilPicture');
	profilPicture.scale.setTo(0.3,0.3);

	textCompetence = game.add.text(310, 360, "Compétence", style);
	textCompetence.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textHobby = game.add.text(310, textCompetence.y+20, "Hobby", style);
	textHobby.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textPersonalite = game.add.text(310, textHobby.y+20, "Personalité", style);
	textPersonalite.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textCouts = game.add.text(310, textPersonalite.y+20, "cout", style);
	textCouts.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textPoste = game.add.text(310, textCouts.y+20, "poste", style);
	textPoste.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

CV.prototype.update = function update() {
  //textCV.setText("CV updated");
};
