function CV(game, nom, competence, hobby, personalite, couts, poste) {
	this.game = game;

	this.nom = nom;
	this.competence = competence;
	this.hobby = hobby;
	this.personalite = personalite;
	this.couts = couts;
	this.poste = poste;
};

// un CV est un cadre reprenant une photo, une liste de données
var graphics;
var CVLayout;
var profilPicture;
var image;
var nom;
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

	graphics = game.add.graphics(100, 100);
	graphics.beginFill(0xebebe0);
	CVLayout = graphics.drawRect(200, 100, 200, 300);
	graphics.endFill();

	textNom = game.add.text(325, 210, this.nom, style);
	textNom.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

	profilPicture = game.add.sprite(325, textNom.y+20, 'profilPicture');
	profilPicture.scale.setTo(0.3,0.3);

	textCompetence = game.add.text(310, 380, this.competence, style);
	textCompetence.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textHobby = game.add.text(310, textCompetence.y+20, this.hobby, style);
	textHobby.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textPersonalite = game.add.text(310, textHobby.y+20, this.personalite, style);
	textPersonalite.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textCouts = game.add.text(310, textPersonalite.y+20, this.couts, style);
	textCouts.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
	textPoste = game.add.text(310, textCouts.y+20, this.poste, style);
	textPoste.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
};

CV.prototype.destroy = function create() {
	graphics.destroy();
	profilPicture.destroy();
	textNom.destroy();
	textCompetence.destroy();
	textHobby.destroy();
	textPersonalite.destroy();
	textCouts.destroy();
	textPoste.destroy();
};

CV.prototype.getNom = function update() {
	return this.nom;
};

CV.prototype.getPoste = function update() {
	return this.poste;
};
