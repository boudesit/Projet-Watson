var preload = function(game) {
	this.game = game;
}

preload.prototype = {
	preload: function() {
		var loadingBar = this.add.sprite(200, 240, "loading");
		this.load.setPreloadSprite(loadingBar);

		// chargement des données du jeu
		// creer le json
		this.createJson = new CreateJson(this.game);
		this.createJson.create();
		var tmp_list = retrieveInfo();
		if (tmp_list != null || tmp_list != 'undefined') {
			if (tmp_list.length === 0) {
				getListCV(this.createJson.getJson());
			}
		} else {
			getListCV(this.createJson.getJson());
		}

		//Spritesheet
		this.game.load.spritesheet("background", "assets/img/table.jpg",800,600,1);
		this.game.load.spritesheet("gametitle", "assets/img/game_start.jpg",800,600,1);
		this.game.load.spritesheet("gameover", "assets/img/table.jpg",800,600,1);
		this.game.load.spritesheet("victory", "assets/img/game_win.jpg",800,600,1);

		//Sound
		game.load.audio('gameSound', 'assets/sound/music_game_1644.mp3');
		game.load.audio('introSound', 'assets/sound/intro_sound.mp3');
		game.load.audio('loseSound', 'assets/sound/gameover_2321.mp3');

		game.load.audio('OKButtonSound', 'assets/sound/numkey.wav');
		game.load.audio('KOButtonSound', 'assets/sound/numkey_wrong.wav');

		//sprite
		game.load.image('profilPicture', 'assets/img/profil.png');

		//button
		game.load.image('OKButton', 'assets/img/cochetrue.png');
		game.load.image('KOButton', 'assets/img/cochefalse.png');
		game.load.image('calcButton', 'assets/img/go.png');
	},

	create: function() {
		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function() {
		this.game.state.start("GameTitle");
	}
}
