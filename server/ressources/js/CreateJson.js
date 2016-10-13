var CreateJson = function(game) {
    this.game = game;
    this.jsonMultiTab = {};
    this.jsonColumns = [];
    this.range = [
      "Java",
      "C",
      "SQL",
      "COBOL"
    ];
    this.preference = [
      "Java",
      "C",
      "COBOL",
      "SQL"
    ];
    this.jsonOptions = [];
    this.subject = "CV";


}

CreateJson.prototype = {
    create: function() {
      this.generate_visualization = false;
      this.jsonMultiTab.subject = this.subject;
      this.jsonMultiTab.generate_visualization = this.generate_visualization;
      this.jsonMultiTab.columns = this.jsonColumns;
      this.jsonMultiTab.options = this.jsonOptions;

      //
      var var1 = {
        "key": "name",
        "type": "text",
        "is_objective": false,
        "full_name": "Name"
      };

      var var2 = {
        "key": "LvlSkill",
        "type": "numeric",
        "goal": "max",
        "is_objective": true,
        "full_name": "Level Skill",
        "format": "number:0"
      };
      var var3 = {
          "key": "skill",
          "type": "categorical",
          "goal": "min",
          "is_objective": true,
          "full_name": "Skill",
          "range": this.range,
          "goal": "min",
          "preference": this.preference
      };

      this.jsonMultiTab.columns.push(var1);
      this.jsonMultiTab.columns.push(var2);
      this.jsonMultiTab.columns.push(var3);

      var var4 = {
          "key": "1",
          "name": "Perso 1",
          "values": {
          "name": "toto",
          "LvlSkill": 50,
          "skill": "Java"
          }
      };

      var var5= {
          "key": "1",
          "name": "Perso 1",
          "values": {
          "name": "toto",
          "LvlSkill": 50,
          "skill": "Java"
          }
      };

      var var6 = {
          "key": "2",
          "name": "Perso 2",
          "values": {
          "name": "titi",
          "LvlSkill": 70,
          "skill": "Java"
          }
      };

      var var7 = {
          "key": "3",
          "name": "Perso 3",
          "values": {
          "name": "tata",
          "LvlSkill": 65,
          "skill": "Java"
        }
      };
      var var8 = {
          "key": "4",
          "name": "Perso 4",
          "values": {
          "name": "tutu",
          "LvlSkill": 55,
          "skill": "C"
          }
    };

    this.jsonMultiTab.options.push(var4);
    this.jsonMultiTab.options.push(var5);
    this.jsonMultiTab.options.push(var6);
    this.jsonMultiTab.options.push(var7);
    this.jsonMultiTab.options.push(var8);

      console.log(JSON.stringify(this.jsonMultiTab));
    },


    update: function() {
    },

    getJson : function() {

      return JSON.stringify(this.jsonMultiTab);
    }
}
