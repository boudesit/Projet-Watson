function HUD(game) {
	this.game = game;
	this.HUDSprite = null;
  this.textHUD = null;
  this.money = null;
  this.duration = null;
	this.Estimation = null;
	this.Needs = null;
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
	this.duration.setProjectSize(this.determinateProjetSize(this.duration.getDuration()));

	//this.estimation = new estimation(this.game);
	//this.estimation.create();

	this.Estimation = new Estimation(this.game);
	this.Estimation.create();

	this.Needs = new Needs(this.game);
	this.Needs.create();

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
	this.Needs.update();
	this.Estimation.update();
	this.need.update();
	//this.estimation.update();
	this.go.update();
	this.cv.update();
	this.team.update();
};


HUD.prototype.chooseDuration = function chooseDuration() {
	return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};
// < >

HUD.prototype.determinateProjetSize = function determinateProjetSize(duration){
	var projectSize;
	if(duration < 3){
		projectSize = "Small project" ;
	}
	else 	if(duration >6){
			projectSize = "Big project" ;
		}
	 else {
	 		projectSize = "Average project";
	 }
	return projectSize;
};
