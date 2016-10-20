var theGame = function(game) {
    this.game = game;
    this.music = null;
    this.spriteBG = null;
    this.white = "#FFFFFF";
    this.hud = null;
    this.createJson = null;
    this.cv_List = null;
}

theGame.prototype = {
    create: function() {

        music = game.add.audio('gameSound', 1.5, true);

        this.spriteBG = this.game.add.tileSprite(0, 0, 800, 600, 'background');
        this.spriteBG.animations.add('backgroundAnime');
        this.spriteBG.animations.play('backgroundAnime', 10, true);

        if (music.isPlaying == false) {
            music.play();
        } else {
            music.resume();
        }

        this.scoreText = this.game.add.text(20, 20, "" + "Test", {
            font: "30px Arial",
            fill: this.white
        });
        this.scoreText.fontWeight = "bold";
        this.scoreText.setText("test1");


        this.hud = new HUD(this.game);
        this.hud.create();

        this.information= new Information();
        this.information.create();
        //this.information.getInformationByKey();
        //this.hud.set_cv_List(cv_List);
    },

    update: function() {

        if (this.cv_List === null || this.cv_List.length === 0) {
            this.cv_List = retrieveInfo();
            if (this.cv_List != null || this.cv_List === 'undefined') {
                if (this.cv_List.length != 0) {
                    console.log(this.cv_List[0]);
                    for (var i = 0 ; i < this.cv_List.length ; i++) {
                        this.hud.CVList.push(new CV(this.game, this.cv_List[i].name, "competence2", "hobby2", "personalite2", "2K", this.cv_List[i].values.skill));
                        this.information.getInformationByKey(1);
                        console.log(this.information.getInformationByKey(this.cv_List[i].key));
                    }
                }
                //appel au HUD
                //this.hud.CVList=[];

            }
            console.log("yo : " + this.cv_List);
        }


        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            //console.log("in the game" + retrieveInfo());

            console.log(response.alchemy_language);
            if (response.alchemy_language === "waiting for response") {
                console.log("call watson");
                alchemy_language(this.scoreText.text);
            }
            this.scoreText.setText(response.alchemy_language);
        }

        this.scoreText.setText(response.alchemy_language);
        this.hud.update();
    },


    lose: function() {
        this.game.state.start("GameOver");
    }

}