function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.money = null;
  this.duration = null;
	this.estimation = null;
	this.need = null;

};

var HUDTab = new Array();
var HUDTabShot = new Array();


HUD.prototype.create = function create() {

  this.money = new Money(this.game);
  this.money.create();

  this.duration = new Duration(this.game);
  this.duration.create();
	this.duration.setDuration(this.chooseDuration());

	this.estimation = new estimation(this.game);
	this.estimation.create();

	this.need = new need(this.game);
	this.need.create();


};

HUD.prototype.update = function update() {
  this.money.update();
  this.duration.update();
	this.need.update();
	this.estimation.update();

};


HUD.prototype.chooseDuration = function chooseDuration() {
	return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};
