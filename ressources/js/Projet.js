function Projet(game) {
	this.game = game;
	this.ProjetSprite = null;
  this.textProjet = null;
  this.Projet = null;
  this.ProjetHasChanged = false;
  this.money = null;
};

var ProjetTab = new Array();
var ProjetTabShot = new Array();


Projet.prototype.create = function create() {
  this.money = new Money(this.game);
  this.money.create();

  this.duration = new Duration(this.game);
  this.duration.create();

	this.duration.setDuration(this.chooseDuration());
  this.money.setMoney(this.chooseMoney());
  this.duration.setMaxPerson(this.maxPerson());

};

Projet.prototype.update = function update() {

  this.duration.update();
  this.money.update();
};


Projet.prototype.chooseDuration = function chooseDuration() {
	return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};
Projet.prototype.chooseMoney = function chooseMoney() {
  return Math.floor(Math.random() * (10000 - 9000 + 1) + 9000) * this.duration.getDuration();
};
Projet.prototype.maxPerson = function chooseMoney() {
  return Math.round(this.money.getMoney() / 25000) +1;
};
