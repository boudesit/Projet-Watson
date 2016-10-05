var gameTitle = function(game){}

gameTitle.prototype = {
	create: function(){

  		introSound = game.add.audio('introSound');

      this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'gametitle');
      this.spriteBG.animations.add('gametitle');
      this.spriteBG.animations.play('gametitle', 2, true);

  		this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		  this.startButton.onDown.add(this.playTheGame, this);

  		if (introSound.isPlaying == false)
  		{
  			introSound.loop = true;
    	  introSound.play();
    	}else{
    		introSound.resume();
    	}
	},
	playTheGame: function(){
		introSound.pause();
		this.game.state.start("TheGame");
	}
}
