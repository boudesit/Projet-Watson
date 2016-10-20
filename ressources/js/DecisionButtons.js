function DecisionButtons(game) {
	this.game = game;
};

var OKButton;
var KOButton;
var clickOK = false;
var clickKO = false;

DecisionButtons.prototype.create = function create() {

	OKButton = game.add.button(game.world.centerX+10, 510, 'OKButton', actionOnClickOK, this, 2, 1, 0);
	KOButton = game.add.button(game.world.centerX-110, 510, 'KOButton', actionOnClickKO, this, 2, 1, 0);
};

function actionOnClickOK () {
	clickOK = true;
}

function actionOnClickKO () {
	clickKO = true;
}

DecisionButtons.prototype.isClickOK = function create() {
	return clickOK;
};

DecisionButtons.prototype.isClickKO = function create() {
	return clickKO;
};

DecisionButtons.prototype.razButtons = function create() {
	clickOK = false;
	clickKO = false;
};

DecisionButtons.prototype.relayoutButtons = function create() {
	game.world.bringToTop(OKButton);
	game.world.bringToTop(KOButton);
};
