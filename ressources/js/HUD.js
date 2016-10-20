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
	this.decisionButtons = null;
	this.CVList = new Array();
	this.currentCV = null
};

var HUDTab = new Array();
var HUDTabShot = new Array();

var CVList = new Array();
var currentCV;

HUD.prototype.create = function create() {

  this.money = new Money(this.game);
  this.money.create();

  this.duration = new Duration(this.game);
  this.duration.create();
	this.duration.setDuration(this.chooseDuration());

	//this.estimation = new estimation(this.game);
	//this.estimation.create();

	this.need = new Needs(this.game);
	this.need.create();

	this.go = new GO(this.game);
	this.go.create();

	//this.CVList.push(new CV(this.game, "Riri", "competence1", "hobby1", "personalite1", "1K", "poste1"));
	// this.CVList.push(new CV(this.game, "Fifi", "competence2", "hobby2", "personalite2", "0.9K", "poste2"));
	// this.CVList.push(new CV(this.game, "Loulou", "competence3", "hobby3", "personalite3", "1.2K", "poste3"));
	// this.CVList.push(new CV(this.game, "Donald", "competence4", "hobby4", "personalite4", "0.5K", "poste4"));
	// this.CVList.push(new CV(this.game, "Picsou", "competence5", "hobby5", "personalite4", "1000K", "poste5"));

	//this.currentCV = this.CVList[0];
	//this.currentCV.create();

	this.team = new Team(this.game);
	this.team.create();


	this.decisionButtons = new DecisionButtons(this.game);
	this.decisionButtons.create();
};

HUD.prototype.update = function update() {
  this.money.update();
  this.duration.update();
	this.need.update();
	//this.estimation.update();
	this.go.update();
	if(this.decisionButtons.isClickOK() && this.CVList.length > 0){
		this.team.getTeamCVs().push(this.currentCV);
		this.team.update();
		this.currentCV.destroy();

		this.CVList.shift();
		if(this.CVList.length > 0){
			this.currentCV = this.CVList[0];
			this.currentCV.create();
			this.decisionButtons.relayoutButtons();
		}
	}
	if(this.decisionButtons.isClickKO() && this.CVList.length > 0){
		this.currentCV.destroy();

		this.CVList.shift();
		if(this.CVList.length > 0){
			this.currentCV = this.CVList[0];
			this.currentCV.create();
			this.decisionButtons.relayoutButtons();
		}
	}
	this.decisionButtons.razButtons();
};


HUD.prototype.chooseDuration = function chooseDuration() {
	return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};

HUD.prototype.set_cv_List = function set_cv_List(cv_List) {
	 this.cv_List = cv_List;
};

HUD.prototype.get_cv_List = function get_cv_List() {
	return this.cv_List;
};
