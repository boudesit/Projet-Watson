var victory = function(game){}


victory.prototype = {
  	create: function(){

  		winSound = game.add.audio('winSound',1,true);
  		if (winSound.isPlaying == false)
  		{
  			winSound.loop = true;
    	    winSound.play();
    	}else{
    		winSound.resume();
    	}

  		var victoryTitle = this.game.add.sprite(0,0,"victory");

      var style = { font: "24px Black Chancery", fill: "#000000", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };

      this.text = "cost: " + this.game.score;
      this.textTeam = game.add.text(30, 220, this.text, style);

      this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.restartButton.onDown.add(this.playTheGame, this);
	},

	playTheGame: function(){
		winSound.pause();
		this.game.state.start("GameTitle");
	}
}
