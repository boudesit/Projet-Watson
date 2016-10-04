var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
	
}

function create() {
	game.time.advancedTiming = true;
	game.state.add("Boot",boot);
	game.state.add("Preload",preload);
	game.state.add("GameTitle",gameTitle);
	game.state.add("TheGame",theGame);
	game.state.add("GameOver",gameOver);
	game.state.start("Boot");
}

function update() {
	

}