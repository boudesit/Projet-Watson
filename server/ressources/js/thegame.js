var theGame = function(game) {
	this.game = game;
	this.music = null;
  this.spriteBG = null;
	this.white = "#FFFFFF";
	this.money = null;
	this.duration = null;
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

		this.scoreText = this.game.add.text(20, 200, "" + "Test", { font: "30px Arial", fill: this.white});
		this.scoreText.fontWeight = "bold";
		this.scoreText.setText("test1");

		this.money = new Money(this.game);
		this.money.create();

		this.duration = new Duration(this.game);
		this.duration.create();
	},

	update: function() {



		if ( game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) )
			{
				var textrep = personality_insights(this.scoreText.text);
				this.scoreText.setText(textrep);
				this.money.update();
				this.duration.update();

			}

	},


	lose: function() {
		this.game.state.start("GameOver");
	}
}
