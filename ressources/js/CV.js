function CV(game, nom, competence, hobby, personalite, couts, poste) {
	this.game = game;

	this.nom = nom;
	this.competence = competence;
	this.hobby = hobby;
	this.personalite = personalite;
	this.couts = couts;
	this.poste = poste;
	this.sprite = null;
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

var CVTab = ['cv','cv2','cv3','cv4','cv'];
var CVTabShot = new Array();

CV.prototype.create = function create() {
  // var style = { font: "bold 15px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
  // //  The Text is positioned at 0, 100
	//
	// graphics = game.add.graphics(100, 100);
	// graphics.beginFill(0xebebe0);
	// CVLayout = graphics.drawRect(200, 100, 200, 300);
	// graphics.endFill();
	//

	//
	// profilPicture = game.add.sprite(325, textNom.y+20, 'profilPicture');
	// profilPicture.scale.setTo(0.3,0.3);


	sprite = game.add.sprite(300, 100, CVTab[this.getRandom()]);
	sprite.inputEnabled = true;

	var style = { font: "16px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };
	var styleNom = { font: "32px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };


	textNom = game.add.text(340,130, this.nom, styleNom);
	textCompetence = game.add.text(340, 190, "Competence: \n" +this.competence, style);
	textHobby = game.add.text(340, 250, "Hobby: \n" +this.hobby, style);
	textPersonalite = game.add.text(340, 310,  "Personalité: \n" +this.personalite, style);
	textCouts = game.add.text(340, 370, "Cout: \n" +this.couts, style);
	textPoste = game.add.text(340, 430, "Poste: \n" +this.poste, style);
};

CV.prototype.destroy = function destroy() {
	sprite.destroy();
	textNom.destroy();
	textCompetence.destroy();
	textHobby.destroy();
	textPersonalite.destroy();
	textCouts.destroy();
	textPoste.destroy();
};

CV.prototype.getNom = function getNom() {
	return this.nom;
};

CV.prototype.getPoste = function getPoste() {
	return this.poste;
};

CV.prototype.getCouts = function getCouts() {
	return this.couts;
};

CV.prototype.getRandom = function getRandom() {
	return Math.floor(Math.random() * (5 - 1 + 1) + 1)
};
