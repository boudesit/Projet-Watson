function Estimation(game) {
	this.game = game;
	this.estimationSprite = null;
  this.textestimation = null;
	this.numestimation = null;
	this.booleanestimation = null;
};


Estimation.prototype.create = function create() {


  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

  //  The Text is positioned at 0, 100
  text = game.add.text(0, 0, "text", style);
  text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

  //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
  text.setTextBounds(0, 100, 800, 100);

};

Estimation.prototype.update = function update() {
  text.setText("estimation :");

};


Estimation.prototype.getEstimation = function getEstimation() {
	return this;
};

Estimation.prototype.setEstimation =function setEstimation(textestimation, numestimation) {
	this.textestimation = textestimation;
  this.numestimation = numestimation;
};

Estimation.prototype.getTextestimation = function getTextestimation() {
	return this.textestimation;
};

Estimation.prototype.setTextestimation =function setTextestimation(textestimation) {
	this.textestimation = textestimation;
};

Estimation.prototype.getNumestimation = function getNumestimation() {
	return this.numestimation;
};

Estimation.prototype.setNumestimation =function setNumestimation(numestimation) {
	this.numestimation = numestimation;
};

Estimation.prototype.getBooleanestimation = function getBooleanestimation() {
 return this.booleanestimation;
};

Estimation.prototype.setBooleanestimation =function setBooleanestimation(booleanestimation) {
	this.booleanestimation = booleanestimation;
};
