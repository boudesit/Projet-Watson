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



        this.hud = new HUD(this.game);
        this.hud.create();

        this.information = new Information();
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
                    for (var i = 0; i < this.cv_List.length; i++) {
                        var info = this.information.getInformationByKey(this.cv_List[i].key);
                        this.hud.CVList.push(new CV(this.game, info.name, info.postes, info.hobby, info.personality, info.value, this.cv_List[i].values.skill));
                        console.log(this.information.getInformationByKey(this.cv_List[i].key));
                        this.hud.currentCV = this.hud.CVList[0];
                        this.hud.currentCV.create();
                    }
                }
                //appel au HUD
                //this.hud.CVList=[];

            }
            console.log("yo : " + this.cv_List);
        }


        // if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        //     //console.log("in the game" + retrieveInfo());

        //     console.log(response.alchemy_language);
        //     if (response.alchemy_language === "waiting for response") {
        //         console.log("call watson");
        //         alchemy_language(this.scoreText.text);
        //     }
        //     this.scoreText.setText(response.alchemy_language);
        // }

        this.hud.update();
    },


    lose: function() {
        this.game.state.start("GameOver");
    }

}