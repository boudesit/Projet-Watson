function Needs(game) {
	this.game = game;
	this.needSprite = null;
  this.textneed = null;
	this.objectifs = null;
	this.skills = null;
};

Needs.prototype.create = function create() {


  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

  //  The Text is positioned at 0, 100
  text = game.add.text(0, 0, "text", style);
  text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

  //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
  text.setTextBounds(0, 100, 800, 100);



};

Needs.prototype.update = function update() {
  text.setText("needs :");

};

Needs.prototype.getObjectifs = function getObjectifs(){
	return this.objectifs;
};

Needs.prototype.setObjectifs = function setObjectifs( objectifs){
	this.objectifs = objectifs;
};

Needs.prototype.getSkills = function getSkills(){
	return this.businessSkill;
};

Needs.prototype.setSkills = function setSkills( skills){
	this.skills = skills;
};
