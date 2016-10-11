function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.money = null;
  this.duration = null;
	this.estimation = null;
	this.need = null;
	this.go = null;
	this.cv = null;
	this.team = null;
	this.estimation = null;
};

var HUDTab = new Array();
var HUDTabShot = new Array();


HUD.prototype.create = function create() {

  this.money = new Money(this.game);
  this.money.create();

  this.duration = new Duration(this.game);
  this.duration.create();
	this.duration.setDuration(this.chooseDuration());

	//this.estimation = new estimation(this.game);
	//this.estimation.create();

	this.need = new need(this.game);
	this.need.create();

	this.go = new GO(this.game);
	this.go.create();

	this.cv = new CV(this.game);
	this.cv.create();

	this.team = new Team(this.game);
	this.team.create();

};

HUD.prototype.update = function update() {
  this.money.update();
  this.duration.update();
	this.need.update();
	//this.estimation.update();
	this.go.update();
	this.cv.update();
	this.team.update();
};


HUD.prototype.chooseDuration = function chooseDuration() {
	return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};
