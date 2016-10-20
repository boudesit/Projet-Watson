function CalculateButton(game) {
	this.game = game;
};

var calcButton;

var clickCalc = false;


CalculateButton.prototype.create = function create() {

	calcButton = game.add.button(game.world.centerX+200, 490, 'calcButton', actionOnClickOK, this, 2, 1, 0);

};

function actionOnClickOK () {
	clickCalc = true;
}



CalculateButton.prototype.isClickOK = function create() {
	return clickCalc;
};



CalculateButton.prototype.razButtons = function create() {
	clickCalc = false;

};

CalculateButton.prototype.relayoutButtons = function create() {
	game.world.bringToTop(calcButton);
};

CalculateButton.prototype.calculate = function create(projet) {
	alert("GOOOOOOOOOOOOOOOOOOOOOO "+projet.money.money);
};