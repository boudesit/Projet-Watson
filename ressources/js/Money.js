function Money(game) {
	this.game = game;
	this.MoneySprite = null;
  this.textMoney = null;
  this.money = null;
  this.moneyHasChanged = false;
};

var MoneyTab = new Array();
var MoneyTabShot = new Array();


Money.prototype.create = function create() {

  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

  //  The Text is positioned at 0, 100
  textMoney = game.add.text(0, 0, "text", style);
  textMoney.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

};

Money.prototype.update = function update() {
	this.game.money = this.money;
  textMoney.setText(this.money+" €");

};


Money.prototype.setMoney  = function setMoney(money){
  this.money = money;
};

Money.prototype.getMoney = function getMoney(){
  return this.money;
};

Money.prototype.moneyHasChanged = function moneyHasChanged(){

  return moneyHasChanged;
};
