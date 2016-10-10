function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.money = null;
  this.duration = null;
};

var HUDTab = new Array();
var HUDTabShot = new Array();


HUD.prototype.create = function create() {

  this.money = new Money(this.game);
  this.money.create();

  this.duration = new Duration(this.game);
  this.duration.create();

};

HUD.prototype.update = function update() {
  this.money.update();
  this.duration.update();
};
