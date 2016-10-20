function CalculateButton(game) {
	this.game = game;
	this.isWin = false;
};

var calcButton;

var clickCalc = false;


CalculateButton.prototype.create = function create() {

	calcButton = game.add.button(game.world.centerX+200, 510, 'calcButton', actionOnClickGO, this, 2, 1, 0);

};

function actionOnClickGO () {
	clickCalc = true;
}



CalculateButton.prototype.isClickGO = function isClickGO() {
	return clickCalc;
};



CalculateButton.prototype.razButtons = function razButtons() {
	clickCalc = false;

};

CalculateButton.prototype.relayoutButtons = function relayoutButtons() {
	game.world.bringToTop(calcButton);
};

CalculateButton.prototype.calculate = function calculate(projet) {
	this.setisWin(true);
};

CalculateButton.prototype.setisWin= function setisWin(isWin) {
	this.isWin = isWin;
};

CalculateButton.prototype.getIsWin= function getIsWin() {
	return this.isWin;
};
