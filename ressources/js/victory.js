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

      this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.restartButton.onDown.add(this.playTheGame, this);
	},
	playTheGame: function(){
		winSound.pause();
		this.game.state.start("GameTitle");
	}
}
