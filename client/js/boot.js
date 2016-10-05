var boot = function(game){
	console.log("%cStarting game");
};
  
boot.prototype = {
	preload: function(){
          this.game.load.image("loading","assets/img/loading.png"); 
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.game.state.start("Preload");
	}
}