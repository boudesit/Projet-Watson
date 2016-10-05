var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

    	//Spritesheet
			this.game.load.spritesheet("background", "assets/img/game_bg_2011.png",800,600,4);
			this.game.load.spritesheet("gametitle", "assets/img/game_start_ss_2021.png",800,600,2);
			this.game.load.spritesheet("gameover", "assets/img/gameover_ss_2228.png",800,600,2);

			//Sound
    	game.load.audio('gameSound', 'assets/sound/music_game_1644.mp3');
    	game.load.audio('introSound', 'assets/sound/music_title_1613.mp3');
    	game.load.audio('loseSound', 'assets/sound/gameover_2321.mp3');
	},

	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
