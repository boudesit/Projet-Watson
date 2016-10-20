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
	this.calculateButton=null;
	this.CVList = new Array();
	this.currentCV = null;
	this.projet = null;
	this.oKButtonSound =  null;
	this.kOButtonSound =  null;
	this.isWin = false;
	this.shakeWorld = 0;
};

var HUDTab = new Array();
var HUDTabShot = new Array();

var CVList = new Array();
var currentCV;

HUD.prototype.create = function create() {
	//this.estimation = new estimation(this.game);
	//this.estimation.create();

	this.oKButtonSound  = game.add.audio('OKButtonSound');
	this.kOButtonSound  = game.add.audio('KOButtonSound');

	this.projet = new Projet(this.game);
	this.projet.create();

	this.need = new Needs(this.game);
	this.need.create();

	this.team = new Team(this.game);
	this.team.create();


	this.decisionButtons = new DecisionButtons(this.game);
	this.decisionButtons.create();

	this.calculateButton = new CalculateButton(this.game);
	this.calculateButton.create();
};

HUD.prototype.update = function update() {
this.projet.update();
	this.need.update();
	//this.estimation.update();

	if(this.decisionButtons.isClickOK() && this.CVList.length > 0){
		this.oKButtonSound .play();
		if(this.team.getTeamCVs().length < this.projet.maxPerson()) {

			this.team.getTeamCVs().push(this.currentCV);
			this.team.update();
			this.currentCV.destroy();
		}
		this.CVList.shift();
		if(this.CVList.length > 0){

			this.currentCV = this.CVList[0];
			this.currentCV.create();
			this.decisionButtons.relayoutButtons();
		}
	}
	if(this.decisionButtons.isClickKO() && this.CVList.length > 0){
		this.kOButtonSound .play();
		this.shakeWorld = 10;
		this.currentCV.destroy();
		this.CVList.shift();
		if(this.CVList.length > 0){
			this.currentCV = this.CVList[0];
			this.currentCV.create();
			this.decisionButtons.relayoutButtons();
		}
	}
	this.decisionButtons.razButtons();

	if (this.calculateButton.isClickGO()){
		this.calculateButton.calculate(this.projet);
		this.calculateButton.relayoutButtons();
	}
	this.calculateButton.razButtons();

	this.setIsWin(this.calculateButton.getIsWin());

	if (this.shakeWorld > 0)
	{
		var rand1 = game.rnd.integerInRange(-5,5);
		var rand2 = game.rnd.integerInRange(-5,5);
		game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
		this.shakeWorld--;
	}

	if (this.shakeWorld == 0) {
		game.world.setBounds(0, 0, game.width,game.height);
	}

};

HUD.prototype.set_cv_List = function set_cv_List(cv_List) {
	 this.cv_List = cv_List;
};

HUD.prototype.get_cv_List = function get_cv_List() {
	return this.cv_List;
};

HUD.prototype.setIsWin= function setIsWin(isWin) {

	this.isWin = isWin;
};

HUD.prototype.getIsWin= function getIsWin() {
	return this.isWin;
};
