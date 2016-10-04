var theGame = function(game) {
	this.game = game;
	this.music = null;
  this.spriteBG = null;
	this.white = "#FFFFFF";
}

theGame.prototype = {
  	create: function() {

  		music = game.add.audio('gameSound',1.5, true);

    	this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    	this.spriteBG.animations.add('backgroundAnime');
    	this.spriteBG.animations.play('backgroundAnime', 10, true);

  		if (music.isPlaying == false)
  		{
    	    music.play();
    	}else{
    		music.resume();
    	}

		this.scoreText = this.game.add.text(20, 20, "" + "Test", { font: "30px Arial", fill: this.white});
		this.scoreText.fontWeight = "bold";
	},

	update: function() {

		this.scoreText.setText("test1");

		if ( game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) )
			{
					this.scoreText.setText("test2");
			}

	},


	lose: function() {
		this.game.state.start("GameOver");
	}
}
