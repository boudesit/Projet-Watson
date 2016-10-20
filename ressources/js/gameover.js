var gameOver = function(game){
}

gameOver.prototype = {
	
  	create: function(){

  		loseSound = game.add.audio('loseSound');
        this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gameover');
        this.spriteBG.animations.add('gameover');
        this.spriteBG.animations.play('gameover', 2, true);

  		if (loseSound.isPlaying == false)
  		{
    	    loseSound.play();
    	}else{
    		loseSound.resume();
    	}	
		
    	var style = { font: "32px Comic Sans MS", fill: "#000000", align: "center" };

    	text = game.add.text(450, 325, this.game.scoreTotal, style);
		
		this.restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		this.restartButton.onDown.add(this.playTheGame, this);
	},
	playTheGame: function(){
		loseSound.pause();
		this.game.state.start("TheGame");
	}
}